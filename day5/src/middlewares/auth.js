const adminAuth = (req, res, next) => {
  console.log("admin middleware is hit");
  const token = "pujan";
  const isAdmin = token === "token";
  if (!isAdmin) {
    res.status(401).send("unauthorized access , you are not admin");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
  console.log("user middleware");
  const token = "token";
  const isUser = token === "token";
  if (!isUser) {
    res.status(401).send("unauthorized access, you are not user");
  } else {
    next();
  }
};

module.exports = { adminAuth, userAuth };
