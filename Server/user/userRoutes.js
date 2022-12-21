const router = require("express").Router();
const { register, login, getAll,findOneUser,updateUser,deleteOneUser } = require("./userController");
router.post("/login", login);
router.post("/register", register);
router.get("/getAll", getAll);
router.get("/get/:email",findOneUser)
router.put("/:id",updateUser)
router.delete("/:id",deleteOneUser);

module.exports = router;
//add delete route from controllers