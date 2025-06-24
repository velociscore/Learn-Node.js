const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
  const { firstName, lastName, password, email } = req.body;
  if (!firstName || !lastName || !password || !email) {
    return res.status(400).send("Missing required fields");
  }

  try {
    const existingUser = await User.find({ email: email });
    if (existingUser.length > 0) {
      return res.status(409).send("User already exist");
    } else {
      // salt round 10 15 20 ....
      const saltRound = 10;
      const hashedPassword = await bcrypt.hash(password, saltRound);

      const user = new User();

      user.firstName = firstName;
      user.lastName = lastName;
      user.password = hashedPassword;
      user.email = email;

      await user.save();

      return res.status(201).json({
        success: true,
        data: user,
      });
    }
  } catch (err) {
    console.log(`something went wrong,${err.message}`);
    res.status(500).send("something went wrong!!!");
  }
};

// whenever you log in, server will send the token inside a cookie,the cookie will be stored by the browser ,
// any request which is comming up next, the cookie will be send along with it.When the cookie will be send,server
// will validate the cookie and ....

/**
 * everytime server is validating the token whenever you make an api call
 *
 *
 */
const login = async (req, res) => {
  // cookies
  const { email, password } = req.body;

  if (!email || !password) {
    return res.send("Email and Password are required");
  }

  // go to database and find the user
  const user = await User.findOne({ email: email });

  if (!user) {
    return res.status(400).json({
      success: false,
      message: "user not found",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (isPasswordValid) {
    // payload secretkey options

    // jwt.sign(payload,jwtsecret,options)
    // jwt.verify(token,secret)
    const token = jwt.sign({ user: user._id }, "jwtsecret", {
      expiresIn: "1h",
    });
    res.cookie("token", token);
    res.status(200).json({
      success: true,
      data: user,
    });
  } else {
    res.status(400).json({
      success: false,
      message: "Invalid credentials ",
    });
  }
};

const profile = async (req, res) => {
  const user = req.user;
  console.log(user);
  res.send(user);
};

// /profile
// /editProfile
// /friendrequest

const getAllUsers = async (req, res) => {
  try {
    const user = await User.find({});
    if (user.length === 0) {
      res.status(200).send("no users found");
    } else {
      res.status(200).json({
        success: true,
        data: user,
      });
    }
  } catch (err) {
    res.status(500).send("somthing went wrong getting user");
  }
};
const updateUser = async (req, res) => {
  const { firstName, lastName, password, email } = req.body;

  // validations do by yourselves

  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      res.status(400).send("user not found");
    } else {
      user.firstName = firstName;
      user.lastName = lastName;
      user.password = password;
      await user.save();
      res.status(201).json({
        success: true,
        data: user,
      });
    }
  } catch (err) {
    res.status(500).send;
  }
};

module.exports = { signUp, getAllUsers, updateUser, login, profile };
