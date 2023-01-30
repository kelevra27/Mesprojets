const mongoose = require('mongoose');
const express = require('express');
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);
const cors = require('cors');
const bodyParser = require("body-parser");
const user = require("./routes/user"); //new addition
const app = express();
const game = require('./routes/game.routes'); // Imports routes for the game
const admin = require('./routes/admin.routes'); // Imports routes for the game
const isObjectId = require('./middleware/isObjectId');


// Connect to DB in mongoAtlas
mongoose.connect('mongodb+srv://Johnny:cash@cluster0.emof9ix.mongodb.net/gameDB?retryWrites=true&w=majority', {
}).then(() => {
    console.log("DB CONNECTED")
}).catch(err => {
    console.log("DB NOT CONNECTED " + err)
});

// app.use((req, res, next) => {
//     console.log(req.body)
//     next()
// })

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */
app.use(cors());
// app.use(express.static('./uploads'));
console.log(__dirname);
app.use('/uploads', express.static(__dirname + '/uploads'))
app.use("/user", user);
app.use('/games', game);
app.use('/admin', admin)

app.get('/', function (req, res) { res.send("Hello World ! C'est le dernier projet !! ") })
app.listen(8000, function () { console.log('Votre app est disponible sur localhost:8000 !') })


// Paiments
app.post("/stripe/charge", cors(), async (req, res) => {
    let { amount, id } = req.body;
    console.log("amount & id : ", amount, id);
    try {
        const payment = await stripe.paymentIntents.create({
            amount: amount,
            currency: "EUR",
            description: "Good games",
            payment_method: id,
            confirm: true,
        });

        res.json({
            message: "Payment réussi",
            success: true,
            
        })

    } catch (error) {
        console.log("Erreur...", error);
        res.json({
            message: "le paiement à échoué",
            success: false,
        })
    }
});

module.exports = app