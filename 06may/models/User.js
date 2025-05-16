const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  phone: Number,
  userName: String,
});

module.exports = mongoose.model("User", userSchema);
