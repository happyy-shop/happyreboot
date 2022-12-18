const router = require("express").Router();
const {
  getAll,
  getOne,
  deleteOne,
  createOne,
  updateOne, 
  findOne
} = require("./ProductController");

router.get("/", getAll); 
router.get("/find",findOne)
router.get("/:id", getOne);

router.delete("/:id", deleteOne);
router.put("/:id", updateOne);
router.post("/", createOne);

module.exports = router;
