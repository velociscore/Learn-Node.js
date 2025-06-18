const mongoose = require("mongoose");

// mongoose.connect(
//   "mongodb+srv://pujan:Paneru%40321@nihareeka.knwy0rq.mongodb.net/workshop"
// );

// promises in js

const connectDb = async () => {
  await mongoose.connect(
    "mongodb+srv://pujan:Paneru%40321@nihareeka.knwy0rq.mongodb.net/workshop"
  );
};

module.exports = connectDb;
// connectDb()
//   .then(() => {
//     console.log("database connected successfully");
//   })
//   .catch((err) => {
//     console.log("error connecting to database", err);
//   });
