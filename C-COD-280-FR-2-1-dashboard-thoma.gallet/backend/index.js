const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require("body-parser");
const user = require("./routes/user"); //new addition
const app = express()
const cors = require('cors');


mongoose.connect('mongodb+srv://Travolta:john@cluster0.emof9ix.mongodb.net/auth?retryWrites=true&w=majority', {
}).then(()=>{
    console.log("DB CONNECTED")
}).catch(err=>{
    console.log("DB NOT CONNECTED " + err)
});


app.use(cors());
app.use(bodyParser.json());
app.use("/user", user);
app.get('/', function (req, res) { res.send('Hello World')})
app.listen(8000, function () { console.log('Votre app est disponible sur localhost:8000 !')})
