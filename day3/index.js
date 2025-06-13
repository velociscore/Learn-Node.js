// Find about caret (^) and tilde (~)

const express = require("express");

const server = express();

// client - sends request
// server -sends response

// handler function

// server.get("/", (req, res, next) => {
//   //   res.status(200).json({
//   //     success: true,
//   //     message: "this is / get route",
//   //   });
//   res.send("this is homepage");
// });

server.get(
  "/example",
  (req, res, next) => {
    console.log("first handler");
    next();
  },
  (req, res, next) => {
    // res.send("second handler function");
    console.log("second handler function");
    next();
  },
  (req, res) => {
    res.send("third handler function");
  }
);

const auth = (req, res, next) => {
  const isAuthorized = false;
  if (!isAuthorized) {
    return res.status(403).send("forbidden");
  }
  next();
};

server.get("/something", auth, (req, res) => {
  res.send("something");
});

server.get("/about", (req, res) => {
  res.status(200).json({
    success: true,
    messsage: "this is second about page",
  });
});

server.listen(1234, (error) => {
  if (error) {
    console.log("error:", error);
  } else {
    console.log("server is running on http://localhost:1234");
  }
});
