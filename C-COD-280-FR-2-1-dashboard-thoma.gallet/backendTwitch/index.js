const express = require('express');
const bodyParser = require("body-parser");
const fetch = require("node-fetch")
const cors = require('cors');
const app = express()

const TWITCH_CLIENT_ID = 'd72l9o7putxq71ktxxku3oqonmw8e6';
const TWITCH_CLIENT_SECRET = 'wbflwf2qcmayjdvxu09y7rwy8mf39m';
const  CALLBACK_URL = 'http://localhost:3000';

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function (req, res) { res.send('Hello World')})

app.post("/getToken", async (req, res) => {

    console.log('Got body:', req.body);
    const code = req.body.code
    const response = await fetch("https://id.twitch.tv/oauth2/token", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body : JSON.stringify({
            client_id : TWITCH_CLIENT_ID,
            client_secret : TWITCH_CLIENT_SECRET,
            code : code,
            grant_type : "authorization_code",
            redirect_uri :"http://localhost:3000/getToken"
        })
    })
    const twitch = await response.json();
    res.status(200).send(twitch);
});



app.listen(8002, function () { console.log('Votre app est disponible sur localhost:8002 !')})

