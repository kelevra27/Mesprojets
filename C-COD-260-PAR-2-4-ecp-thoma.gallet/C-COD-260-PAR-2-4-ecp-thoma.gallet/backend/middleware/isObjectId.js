const mongoose = require('mongoose');

module.exports = async function isObjId(req, res, next) {
    try {
        console.log(req.params.id)
        mongoose.Types.ObjectId(req.params.id);

        console.log("good")
        next()
    } catch (err) {
        res.setHeader('content-type', 'text/plain');
        res.status(400).send("Bad request")
    }
}
