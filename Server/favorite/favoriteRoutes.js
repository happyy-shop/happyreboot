const router = require("express").Router();
const {
  getAllFavorite,
  getAllfavoriteproduct,
  deleteallfavoriteproduct,
  deleteOne,
} = require("./favoriteController");

router.post("/:id", getAllFavorite);
router.get("/getall", getAllfavoriteproduct);
router.delete("/delete", deleteallfavoriteproduct);
router.delete("/delete/:id", deleteOne);
module.exports = router;
