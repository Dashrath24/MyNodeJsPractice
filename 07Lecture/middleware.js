const express = require("express");
const app = express();
const PORT = 9000;

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});
// Parse JSON
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("hello middleware")
})

//server
app.listen(PORT,()=>{
    console.log("server is loaded ",PORT);
    
})