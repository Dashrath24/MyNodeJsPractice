# 🛠 Middleware in Express.js
* 🔹 Overview
>Middleware functions are functions that have access to the request (req), response (res), and next middleware function in the application's request-response cycle. Middleware can execute code, modify the request/response, end the request-response cycle, or call the next middleware.

# 📂 File 1: middleware.js
* What it does:
>Logs every incoming request's method and URL with timestamp.

>Parses incoming JSON payloads.

>Sends a simple response on the root route /.

* Key Code Snippets:

app.use((req, res, next) => { <br>
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);<br>
  next();<br>
});<br>

app.use(express.json());<br>

app.get('/', (req, res) => {<br>
  res.send("hello middleware");<br>
});<br>
# Explanation:<br>
The app.use with a function that logs requests is a custom middleware that runs for every request.

express.json() middleware parses JSON bodies.

The root route sends a basic message.

# 📂 File 2: index.js
* What it does:
>Defines a custom middleware checkAuth that checks for a secret key in query parameters.

>Protects the /dashboard route by requiring a valid secret key (key=12345).

>Provides a default home route /.

* Key Code Snippets:

function checkAuth(req, res, next) { <br>
  const secretKey = req.query.key;<br>
  if (secretKey === "12345") {<br>
    console.log("User Authenticated");<br>
    next();<br>
  } else {<br>
    res.status(401).send("Unauthorized Access - Invalid Key");<br>
  }<br>
}<br>

app.get('/dashboard', checkAuth, (req, res) => {<br>
  res.send("Welcome to The Dashboard");<br>
});<br>

app.get('/', (req, res) => {<br>
  res.send("home Page");<br>
});<br>
# Explanation:
The checkAuth middleware validates the secret key and either allows access or sends a 401 <br>Unauthorized response.

Middleware is applied specifically to the /dashboard route.<br>

* 🚀 Running the servers<br>
>For middleware.js:<br>

>node middleware.js<br>

>For index.js:<br>

>node index.js<br>
# 📌 Usage
Access logging middleware will show all requests in the console.<br>

>Access dashboard with key:<br>


http://localhost:8000/dashboard?key=12345<br>
Without key or wrong key, access will be denied.