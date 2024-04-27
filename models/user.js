const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/loginAuth");

const userSchema = mongoose.Schema({
  email: String,
  username: String,
  password: String,
  age: Number,
});

module.exports = mongoose.model("user", userSchema);
