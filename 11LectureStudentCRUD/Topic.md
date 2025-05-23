🧑‍🎓 Student CRUD with Node.js, Express & MongoDB
Build a full-featured Student Management System where you can Create, Read, Update, and Delete student records. This is a server-side rendered project using EJS templates and styled with Bootstrap.

📁 Folder Structure
<pre> student-crud-app/ │ ├── index.js ├── models/ │ └── Student.js ├── views/ │ ├── home.ejs │ ├── add.ejs │ └── edit.ejs ├── public/ │ └── (static files like CSS, JS, images) └── node_modules/ </pre>
🧠 Concepts Used
Express Routing (GET/POST)

Mongoose for MongoDB interaction

EJS as templating engine

Bootstrap for UI design

Form data handling using express.urlencoded()

🚀 Run This Project
bash
Copy
Edit
npm install
node index.js
Make sure MongoDB is running locally at mongodb://localhost:27017/studentDB.

📜 index.js (Main Server File)
<pre><code>const express = require("express"); const mongoose = require("mongoose"); const Student = require("./models/Student"); const path = require('path'); const app = express(); const PORT = 9000; mongoose .connect("mongodb://localhost:27017/studentDB") .then(() => console.log("mongoDB Connected")) .catch((err) => console.log(err)); app.use(express.urlencoded({ extended: true })); app.use(express.static("public")); app.use('/node_modules', express.static(path.join(__dirname, 'node_modules'))); app.set("view engine", "ejs"); // Home Page - Display Students app.get("/", async (req, res) => { const students = await Student.find(); res.render("home", { students }); }); // Add Student Form app.get("/add", (req, res) => { res.render("add"); }); // Add Student POST app.post("/add", async (req, res) => { const { name, email, course, age, gender, password } = req.body; await Student.create({ name, email, course, age, gender, password }); res.redirect("/"); }); // Edit Form app.get("/edit/:id", async (req, res) => { const student = await Student.findById(req.params.id); res.render("edit", { student }); }); // Update Student app.post("/edit/:id", async (req, res) => { const { name, email, course, age, gender, password } = req.body; await Student.findByIdAndUpdate(req.params.id, { name, email, course, age, gender, password }); res.redirect("/"); }); // Delete Student app.get('/delete/:id', async (req, res) => { await Student.findByIdAndDelete(req.params.id); res.redirect('/'); }); app.listen(PORT, () => { console.log(`server started at : ${PORT}`); }); </code></pre>
🧬 models/Student.js
<pre><code>const mongoose = require("mongoose"); const studentSchema = new mongoose.Schema({ name: String, email: String, age: Number, gender: String, password: String, course: String, }); module.exports = mongoose.model("Student", studentSchema); </code></pre>
🏠 views/home.ejs (Home Page UI)
Displays list of all students.

Password field is masked but toggleable.

Edit and delete options available.

<pre>&lt;!-- Short Sample --&gt; &lt;% students.forEach(student =&gt; { %&gt; &lt;div class="card"&gt; &lt;p&gt;&lt;strong&gt;Name:&lt;/strong&gt; &lt;%= student.name %&gt;&lt;/p&gt; &lt;p&gt;&lt;strong&gt;Email:&lt;/strong&gt; &lt;%= student.email %&gt;&lt;/p&gt; ... &lt;a href="/edit/&lt;%= student._id %&gt;"&gt;Edit&lt;/a&gt; &lt;a href="/delete/&lt;%= student._id %&gt;"&gt;Delete&lt;/a&gt; &lt;/div&gt; &lt;% }); %&gt; </pre>
➕ views/add.ejs (Add Student Form)
Fields: name, email, age, gender (radio), course (dropdown or input), password.

Uses POST /add.

<pre>&lt;form action="/add" method="POST"&gt; &lt;input name="name" type="text" /&gt; ... &lt;input name="password" type="password" /&gt; &lt;/form&gt; </pre>
✏️ views/edit.ejs (Edit Form)
Pre-filled form with current student data.

POSTs to /edit/:id.

<pre>&lt;form action="/edit/&lt;%= student._id %&gt;" method="POST"&gt; &lt;input name="name" value="&lt;%= student.name %&gt;" /&gt; ... &lt;/form&gt; </pre>
🎯 Features
View all students

Add new student

Edit existing student

Delete student

Toggle password visibility

Styled using Bootstrap

🔐 Password Toggle Logic
<pre><code>function togglePassword(studentId) { const input = document.getElementById("student-password-" + studentId); const icon = document.getElementById("eyeIcon-" + studentId); if (input.type === "password") { input.type = "text"; icon.classList.replace("fa-eye", "fa-eye-slash"); } else { input.type = "password"; icon.classList.replace("fa-eye-slash", "fa-eye"); } } </code></pre>
📦 Dependencies
bash
Copy
Edit
npm install express mongoose ejs
✅ Output Preview
Displays list of students with details
Includes edit and delete options with responsive UI
Password toggle feature for security

