// // jsonwebtokens jwt
// const jwt = require("jsonwebtoken");

// const SECRET_KEY = "jwtsecret";

// const protect = (req, res, next) => {
//   const token = req.header("Authorization").replace("Bearer ", "");

//   if (!token) {
//     return res.send(401).json({ message: "unauthorized access" });
//   }

//   try {
//     const decodedToken = jwt.verify(token, SECRET_KEY);
//     req.user = decodedToken;
//     next();
//   } catch (err) {
//     res.status(500).send("something went wrong");
//   }
// };
// module.exports = protect;
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const userAuth = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.send("No token provided");
  }

  try {
    const decoded = await jwt.verify(token, "jwtsecret");
    console.log(decoded);

    const { user } = decoded;

    const users = await User.findById(user);
    console.log(user);

    if (!user) {
      return res.send("NO user found");
    }

    req.user = users;
    next();
  } catch (err) {
    console.log(err);
    res.status(500).send("something went wrong");
  }
};

module.exports = userAuth;
