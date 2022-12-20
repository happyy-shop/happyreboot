const users = require("./userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Handling post request
exports.register = async function (req, res, next) {
    try {
        // Get user input
        const { username, email, password } = req.body;

        // Validate user input
        if (!(email && password && username )) {
          res.status(400).send("All input is required");
        }

        // check if user already exist
        // Validate if user exist in our database
        const oldUser = await users.findOne({ email });

        if (oldUser) {
          return res.status(409).send("users Already Exist. Please Login");
          //return console.log("user mawjoud");
        }

        //Encrypt user password
        encryptedPassword = await bcrypt.hash(password, 10);


        // Create user in our database
        const user = await users.create({
          username,
          email: email.toLowerCase(), // sanitize: convert email to lowercase
          password: encryptedPassword,
        });

        // Create token
        const token = jwt.sign(
          {  email },
          "my_security_key",
          {
            expiresIn: "2h",
          }
        );
        // save user token
        user.token = token;

        // return new user
        res.status(200).json(token);
      } catch (err) {
        console.log(err);
      }

  };
exports.login = async function (req, res, next) {
    // Our login logic starts here
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    const user = await users.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        {  email },
        "my_security_key",
        {
          expiresIn: "2h",
        }
      );

      // save user token
      user.token = token;

      // user
      res.status(200).json(token);
    }
    // res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
  };
  exports.findOneUser = async (req, res) => {
    const oneUser = await users.findOne({ email: req.params.email });
    try {
      res.status(201).send(oneUser);
    } catch (err) {
      res.status(500).json(err);
    }

  };

  exports.getAll = async (req, res) => {
    const allUser = await users.find({});
    try {
      res.status(200).json(allUser);
    } catch (error) {
      res.status(401).json(error);
    }
  };
exports.updateUser = async (req, res) => {
  const update = await users.findByIdAndUpdate(req.params.id, req.body);
  try {
    res.status(201).send(update);
  } catch (error) {
    res.status(500).send(error);
  }
  
}

exports.deleteOneUser = async (req, res) => {
  const id = req.params.id;
  // console.log(req.params);
  try {
    const deleted = await users.findByIdAndDelete(id);
    res.status(204).send(deleted);
    return;
  } catch (err) {
    res.status(500).send(err);
  }
};; 


 
// const login = async (req, res)=> {
//   try {
//     const {
//       body: { email, password },
//     } = req;

//     if (!email && !password) {
//       return res.status(301).json({
//         message: "Email and password required",
//       });
//     }

//     const user = await users.findOne({ email });

//     if (!user) {
//       return res.status(400).json({ message: "Invalid Email" });
//     }

//     const isPasswordValid = await bcrypt.compare(password, user.pwd);

//     if (!isPasswordValid) {
//       return res.status(400).json({ message: "Invalid Password" });
//     }

//     const token = jwt.sign(
//       {
//         id: user["_id"],
//         isAdmin: user["isAdmin"],
//         name: user.name,
//         email: user.email,
//       },
//       "SECRET"
//     );

//     // const token = jwt.sign({ id: user["_id"], name: user.name, userRole: "SIMPLE_USER_ROLE" }, "SECRET");
//     return res.status(200).json({
//       name: user.name,
//       email: user.email,
//       token,
//       id: user["_id"],
//       isAdmin: user["isAdmin"],
//     }); //.json({ token:token});
//   } catch (error) {
//     console.log(error);
//     res.status(500).send(error);
//   }
// }

// const register = async (req, res) => {
//   try {
//     const {
//       body: { name, email, password },
//     } = req;

//     if (!name && !email && !password) {
//       return res.status(301).json({
//         message: "Please fill all fields",
//       });
//     }
//     if (email.includes("@") === false) {
//       return res.status(301).json({
//         message: "Invalid Email",
//       });
//     }
//     if (password.length < 4) {
//       return res.status(301).json({
//         message: "Invalid Password  (minimum 4 characters ) ",
//       });
//     }

//     const newpassword = await bcrypt.hash(password, 10);

//     const user = new users({
//       name,
//       email,
//       pwd: newpassword,
//       isAdmin: false,
//     });

//     user.save();

//     return res.status(200).json({ message: "user Saved" });
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };

// const getAll = async (req, res) => {
//   try {
//     const allusers = await users.find({});
//     res.status(200).send(allusers);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// };
// const findOneUser = async (req, res) => {
//   const oneUser = await users.findOne({ email: req.params.email });
//   try {
//     res.status(201).send(oneUser);
//   } catch (err) {
//     res.status(500).json(err);
//   }

// };

// module.exports = { register, login, getAll , findOneUser };



