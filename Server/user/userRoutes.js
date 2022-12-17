const router = require("express").Router();
const { register, login, getAll,findOneUser } = require("./userController");

router.post("/login", login);
router.post("/register", register);
router.get("/getAll", getAll);
router.get("/:email",findOneUser)

module.exports = router;
