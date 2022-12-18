const router = require("express").Router();
const { register, login, getAll,findOneUser,updateUser } = require("./userController");

router.post("/login", login);
router.post("/register", register);
router.get("/getAll", getAll);
router.get("/:email",findOneUser)
router.put(":id",updateUser)

module.exports = router;
