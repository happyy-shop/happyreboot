let mongoose = require("mongoose");
const db = require("../database/index.js");
mongoose.Promise = global.Promise;

let userSchema = mongoose.Schema({
  username: { type: String },
  email: { type: String },
  password: { type: String },
  isAdmin: { type: Boolean, default: false },
  image: {type:String}, 
});

module.exports = mongoose.model("user", userSchema);
