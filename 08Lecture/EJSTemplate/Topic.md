# 🧩 EJS Template Engine in Express.js
🔹 Overview
EJS (Embedded JavaScript) is a templating engine that allows us to generate HTML markup with plain JavaScript. It integrates easily with Express and allows passing dynamic data to views.

# 📁 Folder Structure
project/ <br>
│
├── views/<br>
│   ├── home.ejs<br>
│   ├── about.ejs<br>
│   └── services.ejs<br>
│<br>
├── index.js<br>
└── package.json<br>

# ⚙️ Setup
> Install EJS: <br>
 npm install ejs
>Configure Express to use EJS:<br>
app.set("view engine", "ejs");

# 🧭 Route Summary (index.js)
✅ Home Route: <br>
app.get("/", (req, res) => {<br>
  res.render("home", { companyName: "frameboxx" });<br>
});<br>

# ✅ About Route:
app.get("/about", (req, res) => {
  res.render("about", {
    compnayName: "Frameboxx IT",
    description: "We are Learning node js",
  });
});

# ✅ Services Route:
app.get("/services", (req, res) => {
  const services = [
    "Web Devlopment",
    "MERN Stack",
    "Python",
    "Java",
    "Testing",
  ];
  res.render("services", { services });
});

# ✨ Writing EJS Templates
>EJS files are HTML files with embedded JavaScript code using special tags:

🔸 Tags in EJS:
Syntax	Description
<%= %>	Output the value (escaped)
<%- %>	Output raw HTML (unescaped)
<% %>	Run JavaScript logic (no output)
<% for (...) { %>	Start loop
<% } %>	End logic block