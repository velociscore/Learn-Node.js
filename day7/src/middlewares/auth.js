// jsonwebtokens jwt
const jwt = require("jsonwebtoken");

const SECRET_KEY = "jwtsecret";

const auth = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.send(401).json({ message: "unauthorized access" });
  }

  try {
    const decodedToken = jwt.verify(token, SECRET_KEY);
    req.user = decodedToken;
    next();
  } catch (err) {
    res.status(500).send("something went wrong");
  }
};
module.exports = auth;
