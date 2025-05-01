const express = require("express");
const app = express();

//set view engine

app.set("view engine", "ejs");

//home page route
app.get("/", (req, res) => {
  res.render("home", { companyName: "frameboxx" });
});
//About Route
app.get("/about", (req, res) => {
  res.render("about", {
    compnayName: "Frameboxx IT",
    description: "We are Learning node js",
  });
});
//service Route
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
//server Listen
app.listen(8000, () => {
  console.log("server running");
});
