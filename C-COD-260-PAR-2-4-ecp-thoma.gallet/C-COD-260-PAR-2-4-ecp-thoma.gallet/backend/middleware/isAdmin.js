const User = require("../model/User");

module.exports = async function isAdmin(req, res, next) {
  let token = req.headers.authorization
    token = token.split(" ")[1]
    console.log(token)
  try {
    let user = await User.findOne({ accessToken: token }).exec();
    console.log(user)
    if (user.role == "admin") {
      console.log('Hi, Admin')
      next();
    } else {
      //res.status(200).send("Ok")
      res.status(403).send("Forbidden")
      return
      console.log('Not admin')
    }

  } catch (err) {
    console.log(err.message)
    res.status(500).send("Error not allowed");
  }
}
