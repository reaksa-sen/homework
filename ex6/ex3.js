const fs = require('fs');

// Promisified readFile function
function readFileAsync(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

// Promisified writeFile function
function writeFileAsync(filePath, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, 'utf8', (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

// Main function using async/await
async function processFiles() {
  try {
    // Read file contents
    const fileData = await readFileAsync('d:/chrome/ex6/input.txt');
    console.log('File content:', fileData);

    // Process data (e.g., convert to uppercase)
    const processedData = fileData.toUpperCase();

    // Write processed data to a new file
    await writeFileAsync('d:/chrome/ex6/output.txt', processedData);
    console.log('Data successfully written to output.txt');
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the main function
processFiles();
