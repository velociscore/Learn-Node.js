const express = require("express");

const { adminAuth, userAuth } = require("./middlewares/auth");

const app = express();
app.use("/admin", adminAuth);

// app.get("/home", (req, res) => {
//   res.send("home");
// });

// middlewares

// app.use("/admin", (req, res, next) => {
//   console.log("admin middleware is hit");
//   const token = "pujan";
//   const isAdmin = token === "token";
//   if (!isAdmin) {
//     res.status(401).send("unauthorized access , you are not admin");
//   } else {
//     next();
//   }
// });

app.get("/admin/getUserData", (req, res) => {
  // check if the request is authorized (ie admin )
  // logic of checking if the request is authorized

  // strict equality ===
  // const token = "pujan";
  // const isAdmin = token === "token";

  // if (isAdmin) {
  //   res.send("getting user data");
  // } else {
  //   res.status(401).send("unauthorized to access this route");
  // }

  res.send("user data retrived successfully");
});
app.delete("/admin/deleteUser", (req, res) => {
  // const token = "pujan";
  // const isAdmin = token === "token";

  // if (isAdmin) {
  //   res.send("delete user successfully");
  // } else {
  //   res.status(401).send("unauthorized to access this delte route");
  // }
  res.send("user deleted successfully");
});

app.get("/user", userAuth, (req, res) => {
  res.send("this is user route");
});

app.listen(1234, (err) => {
  console.log("app is running on http://localhost:1234");
});
