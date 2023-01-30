const Game = require('../model/game.model');
const mongoose = require('mongoose');

exports.game_create = function (req, res) {
    console.log(req.file)
    if (!req.file) {
        res.send({ code: 500, msg: 'Error' })
        return
    }
    let game = new Game(
        {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            commentaire: [],
            picture: req.file.path
        }
    );

    game.save(function (err) {
        if (err) {
            console.log(err)
            res.status(500).send("Internal server error")
            return
        }
        console.log("OK")
        res.setHeader('content-type', 'text/plain');
        res.send('Game Created successfully')
    })
};

exports.game_details = function (req, res) {
    Game.findById(req.params.id, function (err, Game) {
        if (err) {
            console.log(err)
            res.status(404).send("Game not found")
            return
        }
        res.send(Game);
    })
};


exports.game_update = async function (req, res) {

    const properties = ["name", "price", "description"]

    const gameToUpdate = await Game.findOne({ _id: mongoose.Types.ObjectId(req.params.id) })
    if (gameToUpdate === null) {
        res.status(404).send("Game not found")
        return
    }

    await properties.forEach(property => {
        if (req.body[property] != undefined) {
            gameToUpdate[property] = req.body[property];
        }
    })
    await gameToUpdate.save()
    res.send("OK")
};

exports.game_delete = function (req, res) {
    Game.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            console.log(err)
        }
        res.send('Deleted successfully!');
    })
};

exports.game_all = function (req, res) {
    Game.find({}, (err, Games) => {
        if (err) {
            console.log(err)
        }
        res.send(Games);
    })
};

exports.game_comment = async function (req, res) {
    const id = req.params.id;
    const Postcomment = await Game.findById(id)
    Postcomment.commentaire.push({ commentaire: req.body.comment, id: new Date().getTime() });
    await Postcomment.save(function (err) {
        if (err) { console.log(err) }
        res.status(200).send("OK");
    });
}

exports.comment_delete = async function (req, res) {
    const gameId = req.params.id
    const id = req.body.commentId
    const Postcomment = await Game.findById(gameId)
    
    Postcomment.commentaire = Postcomment.commentaire.filter(element => element.id !== id);
    await Postcomment.save(function (err) {
        if (err) { console.log(err) }
        res.status(200).send("OK");
    });
}

