var express = require("express");
var cors = require("cors");

var app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "../client/public"));

app.get("/", function (req, res) {
  res.status(200).json({ message: "Welcome to the car RESTful API!" });
});
app.use("/users", require("./user/userRoutes"));
app.use("/product", require("./Product/ProductRouter"));
app.use("/favorite", require("./favorite/favoriteRoutes"));

var port = 4000;

app.listen(port, () => {
  console.log("server connected : " + port);
});
