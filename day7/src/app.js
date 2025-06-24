const express = require("express");
const userAuth = require("./middlewares/auth.js");
const connectDb = require("./config/db");
const {
  signUp,
  getAllUsers,
  updateUser,
  login,
  profile,
} = require("./controllers/auth");

const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cookieParser());

app.post("/signUp", signUp);
app.get("/getAllUsers", getAllUsers);
app.put("/updateUser", updateUser);
app.post("/login", login);
app.get("/profile", userAuth, profile);

connectDb()
  .then(() => {
    console.log("database connected successfully");
    app.listen(2221, () => {
      console.log("server is running on http://localhost:2221");
    });
  })
  .catch((err) => {
    console.log("error connecting to database", err);
  });
