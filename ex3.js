
// 1.

function ArrayNum(arr, callback) {
    // Iterate over each element of the array
    for (let i = 0; i < arr.length; i++) {
      // Call the callback function with the squared value of the current element
      callback(arr[i] * arr[i]);
    }
  }
  
  // Define the callback function to process each squared number
  function ElementArr(num) {
    console.log(num);
  }
  
  // Define an array of numbers
  const numbers = [1, 2, 3, 4, 5];
  
  // Call the processArray function with the array and the callback
  ArrayNum(numbers, ElementArr);
    

// 2.

// function filterArray(arr, callback) {
//     const result = [];
//     // Iterate over each element of the array
//     for (let i = 0; i < arr.length; i++) {
//       // Call the callback function with the current element
//       if (callback(arr[i])) {
//         // If the callback returns true, add the element to the result array
//         result.push(arr[i]);
//       }
//     }
//     return result;
// }
// // Define the callback function to check if a number is even
// function isEven(num) {
//   return num % 2 === 0;
// }
// // Define an array of numbers
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // Call the filterArray function with the array and the callback
// const evenNumbers = filterArray(numbers, isEven);
// console.log("Even numbers:", evenNumbers);


//3.

// const fs = require('fs');

// function readFileContents(filePath, callback) {
//     // Using fs.readFile to read the file asynchronously
//     fs.readFile(filePath, 'utf8', (err, data) => {
//         if (err) {
//             // If there's an error reading the file, invoke the callback with the error
//             callback(err);
//         } else {
//             // If the file is read successfully, invoke the callback with the file contents
//             callback(null, data);
//         }
//     });
// }

// // Example usage:
// const filePath = 'd:/chrome/fileRead.txt'; // Replace with the actual file path
// readFileContents(filePath, (err, data) => {
//     if (err) {
//         console.error('Error reading file:', err);
//     } else {
//         console.log('File contents:', data);
//     }
// });



//4. 

const fs = require('fs');

function writeFileContents(filePath, fileContents, callback) {
    // Using fs.writeFile to write the file asynchronously
    fs.writeFile(filePath, fileContents, 'utf8', (err) => {
        if (err) {
            // If there's an error writing the file, invoke the callback with the error
            callback(err);
        } else {
            // If the file is written successfully, invoke the callback with no error
            callback(null);
        }
    });
}

// Example usage:
const filePath = 'd:/chrome/output4.txt'; // Replace with the actual file path
const fileContents = 'Hello i am reaksa'; // Replace with the content you want to write
writeFileContents(filePath, fileContents, (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File has been written successfully.');
    }
});


//5.

// const fs = require('fs');

// // Function to read file asynchronously
// function readFile(filePath, callback) {
//     fs.readFile(filePath, 'utf8', (err, data) => {
//         if (err) {
//             callback(err);
//         } else {
//             callback(null, data);
//         }
//     });
// }

// // Function to write file asynchronously
// function writeFile(filePath, fileContents, callback) {
//     fs.writeFile(filePath, fileContents, 'utf8', (err) => {
//         if (err) {
//             callback(err);
//         } else {
//             callback(null);
//         }
//     });
// }

// // Read the content of input.txt
// readFile('d:/chrome/input.txt', (err, data) => {
//     if (err) {
//         console.error('Error reading input.txt:', err);
//     } else {
//         // Append "First modification" to the content
//         const modifiedContent = data + 'First modification';

//         // Write modified content to output1.txt
//         writeFile('d:/chrome/output1.txt', modifiedContent, (err) => {
//             if (err) {
//                 console.error('Error writing output1.txt:', err);
//             } else {
//                 // Read content of output1.txt
//                 readFile('d:/chrome/output1.txt', (err, data) => {
//                     if (err) {
//                         console.error('Error reading output1.txt:', err);
//                     } else {
//                         // Append "Second modification" to the content
//                         const secondModifiedContent = data + 'Second modification';

//                         // Write modified content to output2.txt
//                         writeFile('d:/chrome/output2.txt', secondModifiedContent, (err) => {
//                             if (err) {
//                                 console.error('Error writing output2.txt:', err);
//                             } else {
//                                 // Read content of output2.txt and print to console
//                                 readFile('d:/chrome/output2.txt', (err, data) => {
//                                     if (err) {
//                                         console.error('Error reading output2.txt:', err);
//                                     } else {
//                                         console.log('Final content of output2.txt:', data);
//                                     }
//                                 });
//                             }
//                         });
//                     }
//                 });
//             }
//         });
//     }
// });

