const express = require("express");
const isAdmin = require("../middleware/isAdmin");
const router = express.Router();
const User = require("../model/User");

router.get('/', isAdmin, function (req, res){
    console.log("coucou")
    User.find({}, function (err, users){
            if(err){
                res.send('something went wrong ! ');
                next();
            }
            res.json(users);
        })
        });       
        //Route Get pour recuperer les donnees de TOUT les users (donc utilisable pour le crudAdmin)
    
router.put('/:id/update', isAdmin, async (req, res) => {


    let properties = ["username", "password", "email"]
    const user = await User.findById(req.params.id)
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

router.delete('/:id/delete', isAdmin, async (req,res)=>{
    User.findByIdAndDelete(req.params.id, function (err) {
        if (err) {
            console.log(err)
        }
        res.send('Deleted successfully!');
    })
})

router.post('/:id/editRole', isAdmin, async (req, res) => {
    try {
      let user = await User.findById(req.params.id).exec();
      console.log(user.role)
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
      }  else if (user.role == "admin"){
        await User.updateOne(
            { _id: user._id },
            {
              $set: {
                role: "user",
              },
            }
          );
      }
      else {
        res.status(404).send("error")
        console.log('There is something wrong..')
      }
  
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Error in Saving");
    }
  })

module.exports = router;