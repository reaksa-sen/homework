
//1.

// function greet(name) {
//     return "Hello, " + name + "!";
// }

// // Example usage:
// console.log(greet("John")); // Output: Hello, John!
// console.log(greet("Alice")); // Output: Hello, Alice!


//2. 

// const sum = function(num1, num2) {
//     return num1 + num2;
// };

// // Example usage:
// console.log(sum(3, 4)); // Output: 7
// console.log(sum(-5, 10)); // Output: 5


//3. 

// const average = (number) => {
//     let sum = 0;
//     for (let index = 0; index < number.length; index++) {
//       sum = sum + number[index];
//     }
//     return sum / number.length;
//   };
//   console.log(average([10, 20, 30, 40, 50]));


//4.


// (function (weight, height) {
//     console.log(Math.ceil(weight / (height * height)));
//   })(70, 1.72);

// 5. 

// function myProduct(product) {
//     for (let index = 0; index < product.length; index++) {
//       if (product[index].quantity > 0) {
//         console.log(
//           "Product name:",
//           product[index].name,
//           "product price:",
//           product[index].price,
//           "product quantity:",
//           product[index].quantity
//         );
//       }
//     }
//   }
//   myProduct([
//     { name: "Shirt", price: 10, quantity: 1 },
//     { name: "pant", price: 20, quantity: 0 },
//     { name: "hat", price: 30, quantity: 2 },
//   ]);


//6.

// function checkPassword(password) {
//     if (password.length >= 8) {
//       console.log("strong password");
//     } else {
//       console.log("your password is weak");
//     }
//   }
//   checkPassword("12345678");

//7.

// function countVowel(string) {
//     let count = 0;
//     for (let index = 0; index < string.length; index++) {
//       if (
//         string[index] === "a" ||
//         string[index] === "e" ||
//         string[index] === "i" ||
//         string[index] === "o" ||
//         string[index] === "u"
//       ) {
//         count++;
//       }
//     }
//     return count;
//   }
//   console.log(countVowel("hola hello"));

//8. 

// function sortNumber(number) {
//     return number.sort((aa, bb) => aa - bb);
//   }
//   console.log(sortNumber([40, 20, 1000, 30, 2, 0]));


//9.

// function madianValue(array) {
//     let sortedArray = array.sort((a, b) => a - b);
//     let medianNumber = 0;
  
//     for (let index = 0; index < sortedArray.length; index++) {
//       if (sortedArray.length % 2 == 0) {
//         medianNumber = sortedArray.length / 2;
//         return (array[medianNumber - 1] + array[medianNumber]) / 2;
//       } else {
//         return Math.ceil(sortedArray.length / 2);
//       }
//     }
//   }
//   console.log(madianValue([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//10. 

// function factorialNumber(nonnegative) {
//     let factorial = 1;
//     if (nonnegative > 0) {
//       for (let index = 1; index <= nonnegative; index++) {
//         factorial = factorial * index;
//       }
//     } else {
//       console.log("Error");
//     }
//     return factorial; 
//   }
//   console.log(factorialNumber(7));

