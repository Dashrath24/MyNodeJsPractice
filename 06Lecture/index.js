const express = require("express");
const path = require("path");
const app = express();
const PORT = 7000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../05Lecture", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "../05Lecture", "about.html"));
});
app.get("/user/:name", (req, res) => {
  const userName = req.params.name;
  res.send(`User Name is : ${userName}`);
});
// app.get("/search", (req, res) => {
// //   const keyword = req.query.q;
// //   const category = req.query.cat;
// //   res.send(`Namaste "${keyword}" in a category "${category}"`);

//   const fname =req.query.fname;
//   const lname =req.query.lname;
//   res.send(`you are ${fname} ${lname}`)
// });

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

//start server

app.listen(PORT, () => {
  console.log(`this server started on PORT ${PORT}`);
});
