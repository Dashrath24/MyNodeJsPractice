# CRUD Operations with Express.js and EJS
📁 Folder Structure

Crud/<br>
│<br>
├── public/ <br>
    ├── style.css          # Static assets (CSS, JS, images)<br>
├── views/                 # EJS templates<br>
│   ├── home.ejs           # Home page showing student list<br>
│   ├── new.ejs            # Form to add new student<br>
│   └── edit.ejs           # Form to edit existing student<br>
│<br>
├── index.js               # Main server file<br>
├── package.json           # Project metadata and dependencies<br>
├── package-lock.json<br>
├── .gitignore<br>
├── explaination.md<br>
└── Topic.md<br>

# 🚀 Project Setup
✅ Install Dependencies
npm init -y
npm install express 

🧠 Application Logic
🔸 Initial Data

<pre>let students = [
  { id: 1, name: "Rahul", gender: "Male", age: 10 },
  { id: 2, name: "Krish", gender: "female", age: 20 },
];<pre>

🔄 Routes Overview
🔹 Home Redirect

<pre>app.get("/", (req, res) => {
  res.redirect("/students");
});<pre>

📋 1. Read - View All Students

<pre>app.get("/students", (req, res) => {
  res.render("home", { students });
});<pre>
Loads the home.ejs template
Displays all students

➕ 2. Create - Add New Student
📄 Show Form

<pre>app.get("/students/new", (req, res) => {
  res.render("new");
});<pre>
✅ Handle Submission

<pre>app.post("/students", (req, res) => {
  const newStudent = {
    id: students.length ? students[students.length - 1].id + 1 : 1,
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender
  };
  students.push(newStudent);
  res.redirect("/students");
});<pre>

✏️ 3. Update - Edit Student
📄 Show Form

<pre>app.get("/students/:id/edit", (req, res) => {
  const student = students.find((s) => s.id == req.params.id);
  res.render("edit", { student });
});<pre>
🔁 Handle Update

<pre>app.post("/students/:id/update", (req, res) => {
  const student = students.find((s) => s.id == req.params.id);
  student.name = req.body.name;
  student.age = req.body.age;
  student.gender = req.body.gender;
  res.redirect("/students");
});<pre>
❌ 4. Delete - Remove Student

<pre>app.post("/students/:id/delete", (req, res) => {
  students = students.filter((item) => item.id != req.params.id);
  res.redirect("/students");
});<pre>
🖼️ View Templates (EJS)
🏠 home.ejs
Displays list of students with "Edit" and "Delete" buttons.

➕ new.ejs
Form for adding a new student (fields: name, age, gender).

📝 edit.ejs
Pre-filled form for editing an existing student.

# 📡 Start the Server

<pre>app.listen(PORT, () => {
  console.log("Server started...");
});<pre>
✅ Visit: http://localhost:9000