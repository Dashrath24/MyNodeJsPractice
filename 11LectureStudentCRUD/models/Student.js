const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  age:Number,
  gender:String,
  password:String,
  course: String,
});

module.exports = mongoose.model("Student", studentSchema);
