let mongoose = require("mongoose");
const db = require("../database/index.js");
mongoose.Promise = global.Promise;

let userSchema = mongoose.Schema({
  username: { type: String },
  email: { type: String },
  password: { type: String },
  admin: { type: Boolean, default: false },
  image: {type:String, default: "https://bootdey.com/img/Content/avatar/avatar7.png"}, 
  age: {type: Number, default:18 },
  Phone: {type: Number, default: 11111111 },

});

module.exports = mongoose.model("user", userSchema);
