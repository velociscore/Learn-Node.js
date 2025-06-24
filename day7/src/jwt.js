const jwt = require("jsonwebtoken");

// payload secret options

const user = {
  email: "ppoujan@gmail.com",
  username: "pujan",
};

const token = jwt.sign(user, "jwtsecret", { expiresIn: "1h" });
const decodedToken = jwt.verify(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBwb3VqYW5AZ21haWwuY29tIiwidXNlcm5hbWUiOiJwdWphbiIsImlhdCI6MTc1MDU4ODk3OCwiZXhwIjoxNzUwNTkyNTc4fQ.WC4qk1jY4a5J7S8qa1wBzwB7hSMlNKY6LOPt8taVlZI",
  "jwtsecret"
);
console.log(decodedToken);
