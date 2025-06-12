// creating server
// enabling communication between server through http protocol
// making web server and apis

/**
 * Try exploring the res req object and their methods and try creating your own server using http module
 *
 *
 */
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>This is heading</h1>");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>This is about page</h1>");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not found ");
  }
});

server.listen(8080, () => {
  console.log("server is listening on port 8080");
});

// req object
// req.url req.method req.headers

//res object
// res.statuscode
// res.setHeader
// res.writeHead

// http methods
// get post put delete patch

// status code
/**
 * 200 : OK
 * 201 : created
 * 400:Bad request
 * 404: not found
 *
 */
