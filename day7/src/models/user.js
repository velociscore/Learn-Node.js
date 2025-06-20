const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  // schema level validations
  firstName: {
    type: String,
    minlength: [3],
  },
  lastName: {
    type: String,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
});
// Whenever we are referencing the model ,the name starts with capital letters.

const User = mongoose.model("User", userSchema);
/**
 * User here is like a class, when we create Db, we create collection inside it,that collection will holds
 * some data, we can assume it like User class and we can make the instance of the class.
 *
 * Model is like a class which will make their own instances
 *
 */
module.exports = User;
