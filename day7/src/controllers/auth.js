const User = require("../models/user");

// http methods to update put--for updating all documents ,patch-- for updating specific fields

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
      const user = new User();

      user.firstName = firstName;
      user.lastName = lastName;
      user.password = password;
      user.email = email;

      await user.save();

      res.status(201).json({
        success: true,
        data: user,
      });
    }
  } catch (err) {
    console.log(`something went wrong,${err.message}`);
    res.status(500).send("something went wrong!!!");
  }

  // truthy vs falsy
  //[]
};
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
module.exports = { signUp, getAllUsers, updateUser };
