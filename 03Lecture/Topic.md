#  Node.js Basic Math Module Project
* Project Overview
>This is a simple Node.js project designed to demonstrate how to organize and use modules. It covers:

1. How to create and export functions in separate files.

2. How to import and use these functions in your main application file.

3. Basic arithmetic operations implemented as reusable functions.
------------------------------------------------------------------------------------
# Folder Structure
project-root
│
├── app.js         # Main entry point of the application
├── math.js        # Module exporting add and sub functions
└── square.js      # Module exporting square function
---------------------------------------------------------------------------------------
# What we do in this project
* Create separate modules:

>math.js exports two functions: add(a, b) and sub(a, b).

>square.js exports a function that returns the square of a number.

>Use these modules in the main app:

>app.js imports the add and sub functions from math.js.

>It also imports the square function from square.js.

>Logs the results of these function calls to the console.

>Understand module.exports and require:

>How to export multiple functions from one file using an object.

>How to export a single function.

>How to import these exported functions into another file.
--------------------------------------------------------------------------------------------
# How to Run the Project
1. Make sure you have Node.js installed on your machine.

2. Navigate to the project folder in your terminal.

3. Run the command:

>node app.js