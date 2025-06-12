// File system module (fs)

// synchronously and asynchronously

/**
 * Try exploring the synchronous and asynchronous nature of node js
 */

const fs = require("fs").promises;
// synchronous code
// const fs = require("fs");
// console.log("Start");
// const data = fs.readFileSync("file.txt", "utf8"); // Blocks until file is read

// console.log(data);
// console.log("End");

// asynchronous (using callbacks)
fs.readFile("file.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Reading file error");
  } else {
    console.log(data);
  }
});

// synchronous

const data = fs.readFileSync("file.txt", "utf-8");
console.log(data);

// promise based (asynchronous)

async function readFile() {
  const data = await fs.readFile("file.txt", "utf-8");
  console.log(data);
}
readFile();

// file writting (async)

fs.writeFile("file2.txt", "Hello world", (err) => {
  if (err) {
    console.log("error writting file");
  } else {
    console.log("file is written successfully");
  }
});

// appending data to the file
// appends data to the file ,creates file if it doesnt exist

fs.appendFile("file.txt", "This is another content on this file", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("data appended");
  }
});

// file deletion
fs.unlink("file.txt", (err) => {
  if (err) {
    console.log("error deletion of file");
  } else {
    console.log("file deleted ");
  }
});

// folder operations

fs.mkdir("new-folder", (err) => {
  console.log("folder created");
});

fs.rmdir("new-folder", { recursive: true }, (err) => {
  console.log("folder delted");
});
