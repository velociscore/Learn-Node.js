const express = require("express");
const connectDb = require("./config/db");
const User = require("./models/user");

const app = express();

// schema ??

// schema defines structures rules and datatypes of documents in mongodb collection

// schema is use to create the models

// model ??

// model is class that maps to mongodb collection  and models are responsible to interact with database
// CRUD create read update delete, this operation can only be done with the help model

// mongodb is nosql database (collection)->documents
// data are stroed in rows and colums(tables)--->sql

// app.get("/home", (req, res) => {
//   res.send("this is home route");
// });

app.post("/user", (req, res) => {
  const userObj = {
    firstName: "xxxyy",
    lastName: "something",
    age: 25,
  };

  const user = new User(userObj);
  user.save();

  res.status(201).json(userObj);
});

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
