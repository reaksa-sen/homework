
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

// const calculateAverage = (numbers) => {
//     // Check if the array is empty
//     if (numbers.length === 0) {
//         return 0;
//     }

//     // Calculate the sum of numbers using reduce method
//     const sum = numbers.reduce((acc, curr) => acc + curr, 0);

//     // Calculate the average by dividing the sum by the number of elements
//     return sum / numbers.length;
// };

// // Example usage:
// const numbers = [10, 20, 30, 40, 50];
// console.log(calculateAverage(numbers)); // Output: 30


//4.

// const calculateBMI = function(weight, height) {
//     // Check if height is zero to avoid division by zero
//     if (height === 0) {
//         return "Height cannot be zero!";
//     }

//     // Calculate BMI using the formula
//     const bmi = weight / (height * height);

//     return bmi;
// };

// // Example usage:
// const weight = 70; // in kilograms
// const height = 1.75; // in meters
// console.log("BMI:", calculateBMI(weight, height)); // Output: BMI: 22.86

// 5. 

// function filterProducts(products) {
//     return products.filter(product => product.quantity > 0);
// }

// // Example usage:
// const products = [
//     { name: "Laptop", price: 1000, quantity: 2 },
//     { name: "Phone", price: 800, quantity: 0 },
//     { name: "Tablet", price: 500, quantity: 3 },
//     { name: "Headphones", price: 100, quantity: 0 }
// ];

// const filteredProducts = filterProducts(products);
// console.log(filteredProducts);


//6.

// function isPasswordStrong(password) {
//     // Check if the password length is at least 8 characters
//     return password.length >= 8;
// }

// // Example usage:
// const password1 = "12345678"; // Weak password
// const password2 = "password123"; // Strong password

// console.log(isPasswordStrong(password1)); // Output: false
// console.log(isPasswordStrong(password2)); // Output: true

//7.

// function countVowels(str) {
//     // Convert the string to lowercase to handle both uppercase and lowercase vowels
//     str = str.toLowerCase();
    
//     // Define an array of vowels
//     const vowels = ['a', 'e', 'i', 'o', 'u'];

//     // Initialize a counter to keep track of the number of vowels
//     let count = 0;

//     // Iterate through each character in the string
//     for (let char of str) {
//         // If the character is a vowel, increment the counter
//         if (vowels.includes(char)) {
//             count++;
//         }
//     }

//     return count;
// }

// // Example usage:
// const inputString = "Hello World";
// console.log("Number of vowels:", countVowels(inputString)); // Output: Number of vowels: 3

//8. 
// function sortAscending(numbers) {
//     // Use the Array.sort() method to sort the numbers in ascending order
//     return numbers.sort((a, b) => a - b);
// }

// // Example usage:
// const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
// console.log("Sorted numbers:", sortAscending(numbers)); // Output: Sorted numbers: [1, 1, 2, 3, 3, 4, 5, 5, 6, 9]


//9.

// function median(numbers) {
//     // Sort the array of numbers in ascending order
//     numbers.sort((a, b) => a - b);

//     // Calculate the middle index of the sorted array
//     const middleIndex = Math.floor(numbers.length / 2);

//     // Check if the array length is odd or even
//     if (numbers.length % 2 === 0) {
//         // If the array length is even, return the average of the two middle values
//         return (numbers[middleIndex - 1] + numbers[middleIndex]) / 2;
//     } else {
//         // If the array length is odd, return the middle value
//         return numbers[middleIndex];
//     }
// }

// // Example usage:
// const numbers = [5, 3, 9, 2, 7];
// console.log("Median:", median(numbers)); // Output: Median: 5

//10. 

// function factorial(n) {
//     // Check if the input number is non-negative
//     if (n < 0) {
//         return "Factorial is not defined for negative numbers";
//     }

//     // Initialize the result variable to store the factorial value
//     let result = 1;

//     // Calculate the factorial using a loop
//     for (let i = 2; i <= n; i++) {
//         result *= i;
//     }

//     return result;
// }

// // Example usage:
// const number = 5;
// console.log("Factorial of", number, "is:", factorial(number)); // Output: Factorial of 5 is: 120

