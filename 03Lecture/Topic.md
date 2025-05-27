# 📒 Node.js Basic Math Module Project Documentation (`topic.md`)

---

## ✅ Technologies Used

- **Node.js** — JavaScript runtime environment for backend
- **CommonJS Modules** — Using `module.exports` and `require` for modular code

---

## 🧱 Project Structure

```
project-root/
├── app.js        # Main entry point of the application
├── math.js       # Module exporting add and sub functions
└── square.js     # Module exporting square function
```

---

## 🧩 Modules Overview

### math.js

- Exports two functions:  
  - `add(a, b)` — Returns the sum of two numbers  
  - `sub(a, b)` — Returns the difference between two numbers

```js
// math.js
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

module.exports = { add, sub };
```

### square.js

- Exports a single function:  
  - `square(x)` — Returns the square of a number

```js
// square.js
function square(x) {
  return x * x;
}

module.exports = square;
```

---

## 🌐 Main Application: app.js

- Imports functions from `math.js` and `square.js`
- Calls the functions with sample inputs
- Logs the results to the console

```js
const { add, sub } = require('./math');
const square = require('./square');

console.log('Add: ', add(5, 3));        // Output: 8
console.log('Subtract: ', sub(5, 3));   // Output: 2
console.log('Square: ', square(5));     // Output: 25
```

---

## ⚙️ Running the Project

1. Make sure Node.js is installed on your machine.
2. Navigate to the project directory in your terminal.
3. Run the app with the command:

```bash
node app.js
```

---

## 🧪 Project Summary

| Feature          | File      | Description                                |
|------------------|-----------|--------------------------------------------|
| Addition         | `math.js` | Function to add two numbers                |
| Subtraction      | `math.js` | Function to subtract two numbers           |
| Square Calculation | `square.js` | Function to calculate the square of a number |
| App Execution    | `app.js`  | Imports and uses math functions, logs results |

---

## 🛡️ Optional Enhancements

- Add input validation and error handling
- Write unit tests for each function
- Expand module with more math operations (multiply, divide, etc.)
- Use ES Modules syntax (`import` / `export`) if using newer Node.js versions