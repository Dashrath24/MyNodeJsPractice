# CRUD Operations with Express.js and EJS

A basic student management system using Express.js and EJS view templates.

---

## 📁 Folder Structure

Crud/
│
├── public/ # Static assets (CSS, JS, images)<br>
├── views/ # EJS templates<br>
│ ├── home.ejs # Lists all students<br>
│ ├── new.ejs # Form to add new student<br>
│ └── edit.ejs # Form to edit existing student<br>
│<br>
├── index.js # Main Express server<br>
├── package.json<br>
├── .gitignore<br>
├── explaination.md<br>
└── Topic.md<br>


---

## 📦 Setup Instructions


npm init -y
npm install express ejs

# 🧠 Application Overview
* 🔹 Sample Student Data
<pre>bash let students = [
  { id: 1, name: "Rahul", gender: "Male", age: 10 },
  { id: 2, name: "Krish", gender: "Female", age: 20 },
];</pre> 

# 🚦 Routes Breakdown
1. 🏠 Home (Redirect)

<pre>app.get("/", (req, res) => {
  res.redirect("/students");
});</pre> 

2. 📋 View All Students

<pre>app.get("/students", (req, res) => {
  res.render("home", { students });
});</pre>
3. ➕ Add New Student
🔹 Show Add Form

<pre>app.get("/students/new", (req, res) => {
  res.render("new");
});</pre>
🔹 Handle Form Submission

<pre>app.post("/students", (req, res) => {
  const newStudent = {
    id: students.length ? students[students.length - 1].id + 1 : 1,
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
  };
  students.push(newStudent);
  res.redirect("/students");
});</pre>
4. 📝 Edit Student
🔹 Show Edit Form

<pre>app.get("/students/:id/edit", (req, res) => {
  const student = students.find((s) => s.id == req.params.id);
  res.render("edit", { student });
});</pre>
🔹 Handle Update

<pre>app.post("/students/:id/update", (req, res) => {
  const student = students.find((s) => s.id == req.params.id);
  student.name = req.body.name;
  student.age = req.body.age;
  student.gender = req.body.gender;
  res.redirect("/students");
});</pre>
5. ❌ Delete Student

<pre>app.post("/students/:id/delete", (req, res) => {
  students = students.filter((item) => item.id != req.params.id);
  res.redirect("/students");
});</pre>

# 🖼️ EJS View Templates Overview
* home.ejs
>Lists all students
>Includes "Edit" and "Delete" buttons
* new.ejs
>Form to add a new student
>Fields: name, age, gender

* edit.ejs
>Pre-filled form to update an existing student

# 🧰 Middleware Setup

<pre>app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");


app.listen(9000, () => {
  console.log("Server started...");
});</pre>
➡️ Open browser: http://localhost:9000

