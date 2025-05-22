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
app.get("/about", (req, res) => {<br>
  res.render("about", {<br>
    compnayName: "Frameboxx IT",<br>
    description: "We are Learning node js",<br>
  });<br>
});<br>

# ✅ Services Route:
app.get("/services", (req, res) => {<br>
  const services = [<br>
    "Web Devlopment",<br>
    "MERN Stack",<br>
    "Python",<br>
    "Java",<br>
    "Testing",<br>
  ];
  res.render("services", { services });<br>
});<br>

# ✨ Writing EJS Templates
>EJS files are HTML files with embedded JavaScript code using special tags:

🔸 Tags in EJS:<br>
Syntax	Description<br>
<%= %>	Output the value (escaped)<br>
<%- %>	Output raw HTML (unescaped)<br>
<% %>	Run JavaScript logic (no output)<br>
<% for (...) { %>	Start loop<br>
<% } %>	End logic block<br>