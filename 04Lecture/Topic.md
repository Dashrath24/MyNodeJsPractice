# 📒 Node.js File System (fs) Module Project Documentation (`topic.md`)

---

## ✅ Technologies Used

- **Node.js** — JavaScript runtime for backend development
- **File System Module (`fs`)** — Built-in Node.js module for file operations

---

## 🧱 Project Structure

```
project-root/
├── app.js        # Main script performing all file system operations
└── files/        # (Optional) Directory where files can be created or managed
```

---

## 📂 File System Operations Overview

This project uses both asynchronous and synchronous file system methods:

### ✍️ Writing Files

```js
// Async
fs.writeFile('message.txt', 'Hello async!', (err) => {
  if (err) throw err;
  console.log('File created (async)');
});

// Sync
fs.writeFileSync('message-sync.txt', 'Hello sync!');
console.log('File created (sync)');
```

### 📖 Reading Files

```js
// Async
fs.readFile('message.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Sync
const data = fs.readFileSync('message-sync.txt', 'utf8');
console.log(data);
```

### 🗑️ Deleting Files

```js
// Async
fs.unlink('message.txt', (err) => {
  if (err) throw err;
  console.log('File deleted (async)');
});

// Sync
fs.unlinkSync('message-sync.txt');
console.log('File deleted (sync)');
```

### 🔁 Appending to Files

```js
// Async
fs.appendFile('log.txt', 'New entry\n', (err) => {
  if (err) throw err;
  console.log('Content appended (async)');
});

// Sync
fs.appendFileSync('log.txt', 'Another entry\n');
console.log('Content appended (sync)');
```

---

## 🌐 Main Application: app.js

- Imports the built-in `fs` module
- Performs basic operations: create, read, update, delete
- Demonstrates both async and sync versions

```js
const fs = require('fs');

// Example operations here (see above)
```

---

## ⚙️ Running the Project

1. Make sure Node.js is installed.
2. Navigate to the project directory in your terminal.
3. Run the app with the command:

```bash
node app.js
```

---

## 🧪 Project Summary

| Operation       | Method Type | Description                          |
|------------------|-------------|--------------------------------------|
| Create File     | Async/Sync  | Write content to new files           |
| Read File       | Async/Sync  | Load file content to memory          |
| Delete File     | Async/Sync  | Remove files from filesystem         |
| Append Content  | Async/Sync  | Add content to existing files        |

---

## 🛡️ Optional Enhancements

- Wrap operations with try/catch for error handling
- Use `fs.promises` with `async/await` for cleaner async code
- Handle dynamic filenames and directories
- Add a CLI interface for user input and commands
