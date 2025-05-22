# 🔁 Routing in Express.js
🔹 Overview
Routing in Express.js is the mechanism that maps incoming HTTP requests to specific handlers based on the request's URL and HTTP method. This allows us to build APIs and websites that respond to different routes.

# ⚙️ Setup
✅ Install Express:<br>
npm install express<br>

# 🧭 Route Summary
1. Basic GET Routes

app.get("/", (req, res) => {<br>
  res.send("heelo, home");<br>
});<br>
 
app.get("/about", (req, res) => {<br>
  res.send("heelo,About");<br>
});<br>
These routes respond to HTTP GET requests for / and /about.
2. Route with URL Parameters<br>

app.get("/user/:userId", (req, res) => {<br>
  const id = req.params.userId;<br>
  res.send(`your is :${id}`);<br>
});<br>

# ✅ Example:
http://localhost:3000/user/29 <br>
🧾 Output: your is :29<br>

# 3. Route with Multiple Parameters

app.get("/product/:category/:productID", (req, res) => {<br>
  const productid = req.params.productID;<br>
  const cat = req.params.category;<br>
  res.send(`category:${cat},product id:${productid}`);<br>
});<br>

# ✅ Example:
http://localhost:3000/product/electronics/123<br>
🧾 Output: category:electronics,product id:123

4. Route with Query Parameters <br>

app.get(`/search`, (req, res) => {<br>
  const name = req.query.name;<br>
  const type = req.query.type;<br>
  res.send(`serching for :${name},in categpry:${type}`);<br>
});<br>

# ✅ Example:
http://localhost:3000/search?name=rahul&type=male<br>
🧾 Output: serching for :rahul,in categpry:male

5. POST Request<br>
app.post("/contact", (req, res) => {<br>
  res.send("form submitted");<br>
});<br>
Used for submitting data, typically through forms.<br>

# 🚀 Starting the Server

app.listen(3000, () => {<br>
  console.log("server start");<br>
});<br>