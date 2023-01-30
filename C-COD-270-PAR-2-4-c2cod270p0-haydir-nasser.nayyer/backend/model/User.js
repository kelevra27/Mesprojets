const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  role:{
    type: String,
    default: "user",
    enum:["user", "admin"]
  },
  username: {
    type: String,
    // required: true
  },
  email: {
    type: String,
    // required: true
  },
  password: {
    type: String,
    // required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  favoris:{
    type: Array,
  },
  accessToken : {
    type: String
  }

});

// export model user with UserSchema
module.exports = mongoose.model("user", UserSchema);