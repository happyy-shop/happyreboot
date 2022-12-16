const User = require("../user/userSchema");
const Product = require("../Product/ProductSchema");
const favorite = require("./favoriteSchema");

const getAllFavorite = async (req, res) => {
  console.log(req.body);
  const user = await User.findOne({ id: req.params.user_id });
  const userSaved = await user.save();
  console.log(userSaved);
  if (user) {
    let product = await new favorite({
      userId: userSaved,
      productId: req.body._id,
      productName: req.body.productName,
      description: req.body.description,
      category: req.body.category,
      price: req.body.price,
      imageUrl: req.body.imageUrl,
    });
    product.save();
    res.send(product);
  }
};

const getAllfavoriteproduct = async (req, res) => {
  try {
    const Products = await favorite.find({});
    res.status(200).send(Products);
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteallfavoriteproduct = async (req, res) => {
  try {
    const deleted = await favorite.deleteMany({});
    res.status(204).send(deleted);
    return;
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteOne = async (req, res) => {
  const id = req.params.id;

  try {
    const deleted = await favorite.findByIdAndDelete(id);
    res.status(204).send(deleted);
    return;
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  getAllFavorite,
  getAllfavoriteproduct,
  deleteallfavoriteproduct,
  deleteOne,
};
