const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let GameSchema = new Schema({
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true},
    description: {type: String, required: true, max: 200},
    commentaire: {type: Array},
    picture: {type: String}
});


// Export the model
module.exports = mongoose.model('Game', GameSchema);