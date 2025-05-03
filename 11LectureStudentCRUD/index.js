const express = require("express");
const mongoose = require("mongoose");
const Student = require("./models/Student");
const path = require('path');
const app = express();
const PORT = 9000;

//
mongoose
  .connect("mongodb://localhost:27017/studentDB")
  .then(() => console.log("mongoDB Conneted"))
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//only if u install bootstrap in local
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
//---------------------------
app.set("view engine", "ejs");



// Home - List students

app.get("/", async (req, res) => {
  const students = await Student.find();
  res.render("home", { students });
});

// app.get("/students", (req, res) => {
//   res.render("home", { students });
// });

//add  New students form

app.get("/add", (req, res) => {
  res.render("add");
});

// Add students post method

app.post("/add", async (req, res) => {
  const { name, email, course , age, gender,password} = req.body;
  await Student.create({ name, email, course , age, gender,password});
  res.redirect("/");
});

// Edit students Form
app.get("/edit/:id", async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.render("edit", { student });
});

// Update students

app.post("/edit/:id", async (req, res) => {
  const { name, email, course, age, gender,password  } = req.body;
  await Student.findByIdAndUpdate(req.params.id,{ name, email, course , age, gender,password});
  res.redirect("/");
});

// Delete students
app.get('/delete/:id', async (req, res) => {
  await Student.findByIdAndDelete(req.params.id)
  res.redirect('/');

})
app.listen(PORT, () => {
  console.log(`server started at : ${PORT}`);
});
