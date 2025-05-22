# Node.js File System (fs) Module Project
------------------------------------------------------------------------------------------------
# Project Overview
> This project demonstrates how to use Node.js's built-in fs (File System) module to perform file operations such as creating, reading, updating, and deleting files. It covers both asynchronous and synchronous approaches to file handling.
--------------------------------------------------------------------------------------------------
# What we do in this project
* Understand async vs sync methods in Node.js fs module:

> Asynchronous methods (like fs.writeFile, fs.readFile, etc.) allow the program to continue executing while waiting for file operations to complete. This leads to better performance and responsiveness.

> Synchronous methods (like fs.writeFileSync, fs.readFileSync, etc.) block program execution until the file operation completes.
----------------------------------------------------------------------------------------------------
# Perform basic file operations:

1. Write/Create files using async and sync methods.

2. Read files asynchronously and synchronously.

3. Delete files using unlink methods.

4. Update or append files to add content without overwriting.

Create multiple files programmatically in loops.
--------------------------------------------------------------------------------------------------
# Notes
* Prefer async methods (fs.writeFile, fs.readFile, etc.) over sync ones for better performance, especially in production applications.

1. Async methods use callbacks to handle completion or errors.

2. Sync methods block the Node.js event loop until the operation finishes, so they should be used carefully.

3. fs.appendFile and fs.appendFileSync add data to the end of the file without overwriting existing content.

4.  Deleting files is done using fs.unlink (async) or fs.unlinkSync (sync).