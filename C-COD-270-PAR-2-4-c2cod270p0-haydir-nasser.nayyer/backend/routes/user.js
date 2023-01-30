const express = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const { userRegister } = require("../middleware/AuthAdmin");
const auth = require("../middleware/auth");
const User = require("../model/User");

/**
 * @method - POST
 * @param - /signup
 * @description - User SignUp
 */


// CREATE USER 
// get all users
router.get('/users', function (req, res){
  User.find({}, function (err, users){
      if(err){
          res.send('something went wrong ! ');
          next();
      }
      res.json(users);
  })
  })

router.put('/update', function (req, res) {


})

// REGISTER 
router.post("/signup", [
    check("username", "Please Enter a Valid Username")
      .not()
      .isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a valid password").isLength({
      min: 6
    })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }
    const {
      username,
      email,
      password
    } = req.body;
    try {
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({
          msg: "User Already Exists"
        });
      }
      user = new User({
        username,
        email,
        password,
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      const payload = {
        user: {
          id: user.id
        }
      };
      
      jwt.sign(
        payload,
        "Thoma", {
          expiresIn: 10000
        },
        async (err, token) => {
          if (err) throw err;
          user.accessToken = token
          await user.save();
          res.status(200).json({
            token
          });
        }
      );

    } catch (err) {
      console.log(err.message);
      res.status(500).send("Error in Saving");
    }
  }
);


// LOGIN 
router.post("/login", [
  check("email", "Please enter a valid email").isEmail(),
  check("password", "Please enter a valid password").isLength({
    min: 6
  })
],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      
      if (!user)
        return res.status(400).json({
          message: "User Not Exist"
        });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({
          message: "Incorrect Password !"
        });
      }

    res.status(200).json({token: user.accessToken})
    } catch (e) {
      console.error(e);
      res.status(500).json({
        message: "Server Error"
      });
    }
  }
);




/**
* @method - GET
* @description - Get LoggedIn User
* @param - /user/me
*/

// USER ONYL
router.get("/me", auth, async (req, res) => {
  try {
    // request.user is getting fetched from Middleware after token authentication
    const user = await User.findById(req.user.id);
    res.json(user);
  } catch (e) {
    res.send({ message: "Error in Fetching user" });
  }
});

// Mettre film en favoris
router.post(
  "/favoris",
  async (req, res) => {
    const id = req.body.id;
    const email = req.body.email;

    try {
      // console.log(await User.find().lean().exec())
      console.log(email)
      let user = await User.findOne({ email }).exec();
      console.log(user)
      user.favoris.push(id);
      user.save();

    } catch (err) {
      console.log(err.message);
      res.status(500).send("Error in Saving");
    }
  }
);

// change user role to Admin
router.post("/update", async (req, res) => {
  const token = req.body.token;
  try {
    let user = await User.findOne({accessToken: token}).exec();
    if(user.role == "user") {
      await User.updateOne(
        { _id: user._id },
        {
          $set: {
            role: "admin",
          },
        }
      );
    console.log('User updated')
    res.status(200).send("Ok")
    } else {
      res.status(404).send("error")
      console.log('There is something wrong..')
    }
    // user.save();

  } catch (err) {
    console.log(err.message);
    res.status(500).send("Error in Saving");
  }

})

router.post("/isAdmin", async (req, res) => {
  console.log(req.body)
  const token = req.body.token;
  try {
    let user = await User.findOne({accessToken: token}).exec();
    console.log(user)
    if (user.role == "user"){
      res.status(403).send("Forbidden")
      console.log('Not admin')
    } else{
      res.status(200).send("Ok")
      console.log('Hi, Admin')
    }

  } catch (err) { 
  console.log(err.message)
  res.status(500).send("Error not alowed");
  } 
})



module.exports = router;









// Logout 

// router.delete('/logout', (req, res) => {
//   if (req.session) {
//     req.session.destroy(err => {
//       if (err) {
//         res.status(400).send('Unable to log out')
//       } else {
//         res.send('Logout successful')
//       }
//     });
//   } else {
//     res.end()
//   }
// })


