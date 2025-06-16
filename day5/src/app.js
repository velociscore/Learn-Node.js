const express = require("express");

const server = express();

// server.use all http methods are matched by this use

// server.use("/home", (req, res) => {
//   res.send("this is home route ");
// });
// server.use("/test", (req, res) => {
//   res.send("this is test route");
// });
// server.use("/", (req, res) => {
//   res.send("this is wild request match ");
// });

// http status codes

// 200 ok
// 404 error
// 201 created

// route/ request handler

// query parameters and path parameters
// /search?query=books&sort=price

// path parameters. /:id/:username/:password

// server.get(
//   "/home",
//   (req, res, next) => {
//     // console.log(req.query);
//     console.log(req.params.username);
//     res.status(200).json({
//       message: "this is get home route",
//     });
//   },
//   (req, res) => {
//     res.status(200).json({
//       message: "2nd route handler ",
//     });
//   },
//   (req, res) => {
//     res.status(200).json({
//       message: "3rd route handler ",
//     });
//   }
// );

// server.post("/home", (req, res) => {
//   res.status(200).json({
//     message: "this is post home route",
//   });
// });

// /abc /ac.

// server.get(/^\/ab+c/, (req, res) => {
//   res.send("this is abc route");
// });

// server.get("/home", (req, res) => {
//   console.log("this is home route");
// });

//

// server.get([rh1,rh2],rh3)

// server.get([
//   "/home",
//   (req, res, next) => {
//     // res.send("route 1");
//     next();
//   },
//   (req, res, next) => {
//     // res.send("route 2");
//     next();
//   },
//   (req, res) => {
//     // route handler
//     res.send("route 3");
//   },
// ]);

server.get("/home", (req, res, next) => {
  //   res.send("home");
  next();
});
server.post("/home", (req, res) => {
  res.send("home2");
});

server.listen(1234, (err) => {
  console.log("server is runnning on http://localhost:1234");
});
