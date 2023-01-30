const mongoose = require('mongoose');
const express = require('express');
// const session = require('express-session');
const bodyParser = require("body-parser");
const user = require("./routes/user"); //new addition
const app = express()
const cors = require('cors');
const User = require('./model/User');


mongoose.connect('mongodb+srv://Lennon:john@cluster0.emof9ix.mongodb.net/MyRottenTomatoes?retryWrites=true&w=majority', {
}).then(()=>{
    console.log("DB CONNECTED")
}).catch(err=>{
    console.log("DB NOT CONNECTED " + err)
});



// app.use(session({
//     secret: 'some secret',
//     cookie: {maxAge: 30000 },
//     saveUninitialized: false
// }));

app.use(cors());
app.use(bodyParser.json());
app.use("/user", user);
app.get('/', function (req, res) { res.send('Hello World Bienvenue')})
app.listen(8000, function () { console.log('Votre app est disponible sur localhost:8000 !')})

// get all users
app.get('/user', function (req, res){
User.find({}, function (err, users){
    if(err){
        res.send('something went wrong ! ');
        next();
    }
    res.json(users);
})
})

