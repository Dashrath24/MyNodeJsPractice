# 📁 Express Routing & Dynamic URL Parameters

🔹 Project Purpose

* This project demonstrates how to:

>Serve HTML files using Express

>Handle static routes (like / and /about)

>Accept dynamic route parameters (like /user/:name)

>Parse and respond to query parameters (/search?fname=...&lname=...)

# 🧱 Key Concepts Covered
✅ 1. Serving HTML Pages
Using res.sendFile() to serve static HTML 

res.sendFile(path.join(__dirname, "../05Lecture", "index.html"));

✅ 2. Route Parameters

You can access dynamic parts of the URL using req.params:


app.get("/user/:name", (req, res) => {

  const userName = req.params.name;

  res.send(`User Name is : ${userName}`);

});

>Example:

http://localhost:7000/user/Dashrath

📤 Output: User Name is : Dashrath

✅ 3. Query Parameters

Using req.query to extract parameters from the URL query string.


app.get("/search", (req, res) => {

  const { q, cat, fname, lname } = req.query;

  if (q && cat) {

    res.send(`Namaste "${q}" in a category "${cat}"`);

  } else if (fname && lname) {

    res.send(`You are ${fname} ${lname}`);
  } else {

    res.send("Please provide valid query parameters.");
  }

});

>Example 1:

http://localhost:7000/search?q=javascript&cat=frontend

📤 Output: Namaste "javascript" in a category "frontend"

>Example 2:

http://localhost:7000/search?fname=Dashrath&lname=Gamit

📤 Output: You are Dashrath Gamit

🚀 Start the Server

node index.js

Server runs on:

http://localhost:7000/
