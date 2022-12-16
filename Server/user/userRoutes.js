const router = require("express").Router();
const { register, login, getAll } = require("./userController");

router.post("/login", login);
router.post("/register", register);
router.get("/getAll", getAll);

module.exports = router;
