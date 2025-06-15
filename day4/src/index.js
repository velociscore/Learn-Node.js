const express = require("express");

const server = express();
// why we are only getting hello from slash route?? while i am hitting /home route ..
// server.get

// Order of routes matters ....

// server.use("/", (req, res) => {
//   res.send("hello from slash route ");
// });

// server.get("/home", (req, res) => {
//   res.send("this is get home route ");
// });

// middleware (use)

// http methods get post patch put delelte....

// postman

// server.get("/home", (req, res) => {
//   res.send("this is get home");
// });

// why do we need post ,put ,patch --- homework

// getting query parameters and path parameters

// query parameter uses key value pair to send data to server

// path parameter

// how we send data through url ???

// dynamic routing

server.get("/home/:name/:surname", (req, res) => {
  console.log(req.params);

  res.send("this is post home");
});

// server.use("/home/something", (req, res) => {
//   res.send("this is something route ");
// });
// server.use("/home", (req, res) => {
//   res.send("this is home route");
// });

server.use("/test", (req, res) => {
  res.send("this is test route");
});
server.use("/hello", (req, res) => {
  res.send("hello hello");
});

server.listen(4444, () => {
  console.log("server is running http://localhost:4444");
});
