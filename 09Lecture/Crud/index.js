const express = require("express");
const app = express();
const PORT = 9000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

//  Data

let students = [
  { id: 1, name: "Rahul", gender: "Male", age: 10 },
  { id: 2, name: "Krish", gender: "female", age: 20 },
];
// Home - List students

app.get("/", (req, res) => {
  res.redirect("/students");
});

app.get("/students", (req, res) => {
  res.render("home", { students });
});

// New students form

app.get("/students/new", (req, res) => {
  res.render("new");
});

// Add students

app.post("/students", (req, res) => {
  const newStudent = {
    id: students.length ? students[students.length - 1].id + 1 : 1,
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender
  };
  students.push(newStudent);
  res.redirect("/students");
});

// Edit students Form
app.get("/students/:id/edit", (req, res) => {
  const student = students.find((s) => s.id == req.params.id);
  if (!student) return res.status(404).send("Student Not Found");
  res.render("edit", { student });
});

// Update students

app.post("/students/:id/update", (req, res) => {
  const student = students.find((s) => s.id == req.params.id);
  if (!student) return res.status(404).send("Student Not Found");
  student.name = req.body.name;
  student.age = req.body.age;
  student.gender = req.body.gender;

  res.redirect("/students");
});

// Delete students

app.post("/students/:id/delete", (req, res) => {
  students = students.filter((item) => item.id != req.params.id);
  res.redirect("/students");
});

app.listen(PORT, () => {
  console.log("Server started...");
});
