//2.


const fs = require("fs");
// Read file as promise

function readFilePromise(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
}

// Write file as promise
function writeFilePromise(path, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err) => {
      if (err) return reject(err);
      resolve();
    });
  });
}

// Usage
readFilePromise("d:/chrome/ex6/file1.txt")
  .then((data) => {
    console.log(data);
    // Process data
    return writeFilePromise("d:/chrome/ex6/file2.txt", processedData);
  })
  .then(() => {
    console.log("Write completed!");
  })
  .catch((err) => {
    console.error(err);
  });