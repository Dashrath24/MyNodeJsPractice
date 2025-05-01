// const { log } = require("console");
// const fs = require("fs");

// const boiler = `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>

// </body>
// </html>`;
// fs.writeFile("./index.html", boiler, (err) => {
//   console.log(err);
// });
// fs.writeFile("./about.html", boiler, (err) => {
//   console.log(err);
// });
// fs.writeFile("./404.html", boiler, (err) => {
//   console.log(err);
// });

// fs.writeFile("./data.txt", "here data print", (err) => {
//       console.log(err);
//     });

const http = require("http");
const { log } = require("util");
const fs = require("fs");

const PORT = 7000;

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()} : ${req.url} New Request Recevied\n`;

  fs.appendFile("./data.txt", log, (error, data) => {
    switch (req.url) {
      case "/":
        res.end("This is Home Page");

        break;
      case "/about":
        res.end("This is About Page");

        break;
      case "/team":
        res.end("This is Team Page");

        break;

      default:
        res.end("404 Error!");
        break;
    }
  });
});

myServer.listen(PORT, () => {
  console.log(`The Server Is Started on PORT : ${PORT}`);
});
