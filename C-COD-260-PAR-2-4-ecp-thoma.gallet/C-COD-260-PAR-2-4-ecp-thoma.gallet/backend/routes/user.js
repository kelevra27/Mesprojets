const express = require("express");
const { check, validationResult, body } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const router = express.Router();


const User = require("../model/User");

/**
 * @method - POST
 * @param - /signup
 * @description - User SignUp
 */

// Register 
router.post(
    "/signup",
    [
        check("username", "Please Enter a Valid Username")
            .not()
            .isEmpty(),
        check("email", "Please enter a valid email").isEmail(),
        check("password", "Please enter a valid password").isLength({
            min: 4
        })
    ], async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const { username, email, password } = req.body;
        try {
            let user = await User.findOne({
                email
            });
            if (user) {
                return res.status(400).json({
                    msg: "User Already Exists"
                });
            }

            user = new User({ username, email, password });

            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);

            
            const payload = {
                user: { id: user.id }
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



router.post(
    "/login",
    [
        check("email", "Please enter a valid email").isEmail(),
        check("password", "Please enter a valid password").isLength({
            min: 4
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
            const user = await User.findOne({
                email
            });
            if (!user)
                return res.status(400).json({
                    message: "User Not Exist"
                });

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch)
                return res.status(400).json({
                    message: "Incorrect Password !"
                });

            res.status(200).json({
                token: user.accessToken
            });

        } catch (e) {
            console.error(e);
            res.status(500).json({
                message: "Server Error"
            });
        }
    }
);





router.get('/users', function (req, res) {
    token = req.headers.authorization
    token = token.split(" ")[1]
    console.log(token)
    User.findOne({ accessToken: token }, function (err, users) {
        if (err) {
            res.send('something went wrong ! ');
            next();
        }
        console.log(users)
        res.json(users);
    })
    }); 

// router.get('/users', function (req, res){
//     User.find({}, function (err, users){
//         if(err){
//             res.send('something went wrong ! ');
//             next();
//         }
//         res.json(users);
//     })
//     });       Route Get pour recuperer les donnees de TOUT les users (donc utilisable pour le crudAdmin)

/**
* @method - GET
* @description - Get LoggedIn User
* @param - /user/me
*/


router.get("/me", auth, async (req, res) => {
    try {
        // request.user is getting fetched from Middleware after token authentication
        const user = await User.findById(req.user.id);
        res.json(user);
    } catch (e) {
        res.send({ message: "Error in Fetching user" });
    }
});


router.put('/users', async (req, res) => {
    console.log(req.body)

    let properties = ["username", "password", "email"]
    
    token = req.headers.authorization
    token = token.split(" ")[1]
    console.log(token)

    const user = await User.findOne({ accessToken: token })
    if (user === null) {
        res.status(404).send("User not found")
        return
    }
    console.log(user)
    await properties.forEach(property => {
        if (req.body[property] != undefined) {
            user[property] = req.body[property];
        }
        // methode pour changer les informations une par une
        // // user.username = req.body.username
        // // user.password = req.body.password
        // res.send("OK")
    })
    await user.save()
    res.send("OK")
})

router.delete('/users', function (req, res) {
    token = req.headers.authorization
    console.log(token)
    token = token.split(" ")[1]
    User.findOneAndDelete({ accessToken: token}, (err, result) => {
        if (err) throw err;
        res.send('user deleted')
    })

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
  router.post("/achats", async (req, res) => {
      const _id = req.params._id;
      const PostAchats = await User.findById(_id);
      PostAchats.achats.push({achats : req.body.achat, _id: new Date().getTime() });
      await PostAchats.save(function (err ) {
          if(err) { console.log(err) }
          res.status(200).send("Ok purchase done");
      })
  })
  
module.exports = router;

