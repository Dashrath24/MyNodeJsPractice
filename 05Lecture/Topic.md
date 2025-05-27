
# 📒 Node.js HTTP Server and Linking HTML Files Documentation (`topic.md`)

---

## ✅ Technologies Used

- **Node.js** — JavaScript runtime environment
- **http** — Built-in module for creating HTTP servers
- **fs** — File System module to read/write files
- **path** — To construct file paths

---

## 🧱 Project Structure

```
project/
├── index.html      # Home page HTML file
├── about.html      # About page HTML file
├── navbar.html     # Reusable navigation HTML fragment
├── 404.html        # Error page for unmatched routes
├── server.js       # Node.js server logic
└── data.txt        # Logs incoming requests with timestamps
```

---

## 🌐 Server Overview (`server.js`)

- Creates a basic HTTP server using `http.createServer()`.
- Handles routing for `/`, `/about`, and other URLs.
- Serves static HTML content using `fs.readFile`.
- Logs every request into `data.txt` with a timestamp.

### Example Server Logic Snippet

```js
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const log = `${new Date().toISOString()} - ${req.url}\n`;
  fs.appendFile('data.txt', log, () => {});

  let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url === '/about' ? 'about.html' : '404.html');

  fs.readFile(filePath, (err, data) => {
    res.writeHead(err ? 404 : 200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});

server.listen(3000, () => console.log('Server running on port 3000'));
```

---

## 📄 HTML Files Overview

- **index.html** — Main landing page served at `/`
- **about.html** — Served at `/about`
- **404.html** — Fallback page when route doesn’t match
- **navbar.html** — Optional snippet included manually inside other pages

---

## ⚙️ Running the Project

1. Ensure Node.js is installed.
2. Navigate to the project directory in your terminal.
3. Run the server:

```bash
node server.js
```

4. Open your browser at [http://localhost:3000](http://localhost:3000)

---

## 🧪 Project Summary

| Feature             | File        | Description                                      |
|---------------------|-------------|--------------------------------------------------|
| HTTP Server         | `server.js` | Handles requests and sends HTML/response         |
| Static HTML Content | `.html`     | Pages served via `fs.readFile`                  |
| Request Logging     | `data.txt`  | Logs all incoming requests with timestamps       |
| Route Handling      | `server.js` | Detects `/`, `/about`, and serves 404 otherwise |

---

## 🛡️ Optional Enhancements

- Auto-include `navbar.html` via templating engine
- Add CSS/JS for better design and interactivity
- Use asynchronous logging with better formatting
- Handle content types dynamically for CSS/JS responses
