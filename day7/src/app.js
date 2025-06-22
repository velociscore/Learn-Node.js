const express = require("express");
const connectDb = require("./config/db");
const { signUp, getAllUsers, updateUser } = require("./controllers/auth");
const auth = require("./middlewares/auth");

const app = express();
app.use(express.json());

app.post("/signUp", auth, signUp);
app.get("/getAllUsers", getAllUsers);
app.put("/updateUser", updateUser);

connectDb()
  .then(() => {
    console.log("database connected successfully");
    app.listen(1234, () => {
      console.log("server is running on http://localhost:1234");
    });
  })
  .catch((err) => {
    console.log("error connecting to database", err);
  });
