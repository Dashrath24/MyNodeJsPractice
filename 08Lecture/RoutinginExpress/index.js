const express = require("express");
const app = express();

//geting request
app.get("/", (req, res) => {
  res.send("heelo, home");
});
//another get req
app.get("/about", (req, res) => {
  res.send("heelo,About");
});
//routing with parameter
app.get("/user/:userId", (req, res) => {
  const id = req.params.userId;res.send(`your is :${id}`);
});
//http://localhost:3000/user/29

//multiple routing
app.get("/product/:category/:productID", (req, res) => {
  const productid = req.params.productID;
  const cat = req.params.category;
  res.send(`category:${cat},product id:${productid}`);
});

//query params
app.get(`/search`, (req, res) => {
  const name = req.query.name;
  const type = req.query.type;
  res.send(`serching for :${name},in categpry:${type}`);
});
//http://localhost:3000/search/?name=rahul/&type=male

//post method request
app.post("/contact", (req, res) => {
  res.send("form submitted");
});

//server
app.listen(3000, () => {
  console.log("server start");
});
