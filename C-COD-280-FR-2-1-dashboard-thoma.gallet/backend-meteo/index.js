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

// Middleware

/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */
// app.use("/user", user);

app.listen(8001, function () { console.log('Votre app est disponible sur localhost:8001 !') })


const request = require("request")
const dotenv = require("dotenv").config()



app.get('/', function (req, res) {
    const city = req.query.city 
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.API_KEY}`;
    console.log(url)
    request(url, (error, response, body) => {
        const data = JSON.parse(body)
        res.send(`It's currently ${data.main.temp + '°'} in ${data.name}.`)
    })
})




