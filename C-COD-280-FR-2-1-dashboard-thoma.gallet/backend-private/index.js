const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Travolta:john@cluster0.emof9ix.mongodb.net/auth?retryWrites=true&w=majority', {
}).then(() => {
    console.log("DB CONNECTED")
}).catch(err => {
    console.log("DB NOT CONNECTED " + err)
});
const express = require('express');

const app = express()
const cors = require('cors');
app.use(cors());


app.listen(8003, function () { console.log('Votre app est disponible sur localhost:8003 !') })

app.get('/', function (req, res) { res.send("Hello world !")})



