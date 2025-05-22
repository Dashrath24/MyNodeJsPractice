# Node.js HTTP Server and Linking HTML Files
* 🧾 Topic Overview
> This topic covers how to:

1. Create a basic HTTP server using Node.js's built-in http module.

2. Handle different routes like /, /about, etc.

3. Serve HTML files using fs and path modules.

4. Log incoming requests.

5. Respond with plain messages or full HTML files based on request type.

# ✅ What We Do in This Project
1. Create a Server
Using the http.createServer() method, we create a server that listens for incoming requests on a specified port.

2. Route Handling
The server checks the req.url and serves:

>A plain message (like “This is Home Page”) — OR

>A full HTML file (like index.html)

3. Serve Static HTML Files
Use the fs and path modules to read HTML files from the file system and send them in the response.

4. Log Requests
Every incoming request is logged into a data.txt file with a timestamp.

# 📁 Folder Structure Example
project/
│
├── index.html
├── about.html
├── navbar.html
├── 404.html
├── server.js
└── data.txt
