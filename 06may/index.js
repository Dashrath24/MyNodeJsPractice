const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");
const app = express();
const PORT = 9000;

//
mongoose
  .connect("mongodb://localhost:27017/userDB")
  .then(() => console.log("mongoDB Conneted"))
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/",(req, res) => {
  res.render("login");
});

// Add students post method

//middelware
function checkAuth(req, res, next) {
  const secretKey = req.query.key;

  if (secretKey === "12345") {
    console.log("User Authenticated");
    next();
  }
  //http://localhost:9000/login?key=12345
  else {
    res.status(401).send("Unauthorized Access - Invalid Key");
  }
}
app.get("/home", checkAuth, (req, res) => {
  res.render('home ');
});

app.post("/home",async (req, res) => {
  const { email, password, phone, userName, key } = req.body;
   await  User.create({ email, password, phone, userName });
  res.redirect(`/home?key=${key}`);
});


app.listen(PORT, () => {
  console.log(`server started at : ${PORT}`);
});
