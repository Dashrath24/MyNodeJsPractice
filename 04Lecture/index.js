console.log("hello dashrath,Welcome back");

const { log } = require("console");

//This way, you can use log() directly in your code instead of writing console.log() every time.

const fs = require("fs");
//--------------------------------------------------------------------------------------------------------------------------
///Prefer async methods for better performance and responsiveness.
//--------------------------------------------------------------------------------------------------------------------------
//Write file ==>create file
// fs.readFile ==>
// fs.unlink  ===>delet file

//**************************************************************************************************** */
//Asynchronous:
//----------------------------------------------------------------------------------------------------------
//"I sent an email to the bakery with my order and continued working until they replied."
//fs.writeFile, fs.readFile, fs.unlink, etc.
///---------------------------------------------------------------------------------------------------------------

//01.writefile===>create file

// fs.writeFile(
//   "./data.txt",
//   "hello i created this folder with the use of Async",
//   (err) => {
//     console.log(err);
//   }
// );

//create multiple files

// const arr = ["dashrath", "hiren", "jay"];
// for (let i = 0; i < arr.length; i++) {
//   fs.writeFile(`./${arr[i]}.text`, `file ${arr[i]}`, (err) => {
//     console.log(err);
//   });
// }

//
// ----------------------------------------------------------------------
//02.Read file

// fs.readFile("./dashrath.text", "utf-8", (err, res) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// });

//-------------------------------------------------------------------------------
//03.unlink==delete files

// fs.unlink("./dashrath.text",(err)=>{
//     console.log(err);
// });

//----------------------------------------------------------------------------------------
//04.Update/apend file

// fs.appendFile("hiren.txt", "hello we are updating file\n", (err) => {
//   console.log(err);
// });

//********************************************************************************************************* */
//Synchronous:
//------------------------------------------------------------------------------------------------------
//"I called the bakery and waited on the line until they took my order."
//fs.writeFileSync, fs.readFileSync, fs.unlinkSync, etc.
//----------------------------------------------------------------------------------------------------------------

//01. writefile===>create file
// fs.writeFileSync(
//   "./data01.txt",
//   "hello i created this folder with the use of sync"
// );

//create multiple files

// const arr = ["dashrath", "hiren", "jay"];
// for (let i = 0; i < arr.length; i++) {
//   fs.writeFileSync(`./${arr[i]}.txt`, `file ${arr[i]}`);
// }
// -------------------------------------------------------------------------
//02.Read file

// const res = fs.readFileSync("./data.txt", "utf-8");
// console.log(res);

// -----------------------------------------------------------------------------
//03.unlink==delete files

// fs.unlinkSync("./dashrath.txt")

//-----------------------------------------------------------------------------------

//04.Update/apend file

// fs.appendFileSync("hiren.text", "\nhello we are updating file\n");



  // https://nodejs.org/api/fs.html