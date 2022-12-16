var mongoose = require("mongoose");
var mongoUri =
  "mongodb+srv://happy:shop@cluster0.tq8hta3.mongodb.net/?retryWrites=true&w=majority";
mongoose.set("strictQuery", false);
mongoose.connect(mongoUri, () => {
  console.log("Database connected  :)");
});
var db = mongoose.connect(mongoUri);
module.exports = db;
