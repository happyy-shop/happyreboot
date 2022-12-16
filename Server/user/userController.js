const users = require("./userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function login(req, res) {
  try {
    const {
      body: { email, password },
    } = req;

    if (!email && !password) {
      return res.status(301).json({
        message: "Email and password required",
      });
    }

    const user = await users.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid Email" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.pwd);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid Password" });
    }

    const token = jwt.sign(
      {
        id: user["_id"],
        isAdmin: user["isAdmin"],
        name: user.name,
        email: user.email,
      },
      "SECRET"
    );

    // const token = jwt.sign({ id: user["_id"], name: user.name, userRole: "SIMPLE_USER_ROLE" }, "SECRET");
    return res.status(200).json({
      name: user.name,
      email: user.email,
      token,
      id: user["_id"],
      isAdmin: user["isAdmin"],
    }); //.json({ token:token});
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

const register = async (req, res) => {
  try {
    const {
      body: { name, email, password },
    } = req;

    if (!name && !email && !password) {
      return res.status(301).json({
        message: "Please fill all fields",
      });
    }
    if (email.includes("@") === false) {
      return res.status(301).json({
        message: "Invalid Email",
      });
    }
    if (password.length < 4) {
      return res.status(301).json({
        message: "Invalid Password  (minimum 4 characters ) ",
      });
    }

    const newpassword = await bcrypt.hash(password, 10);

    const user = new users({
      name,
      email,
      pwd: newpassword,
      isAdmin: false,
    });

    user.save();

    return res.status(200).json({ message: "user Saved" });
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAll = async (req, res) => {
  try {
    const allusers = await users.find({});
    res.status(200).send(allusers);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { register, login, getAll };
