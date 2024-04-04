
// 1.

// let i = 0;
// for(i=0;i<=10;i++){
//     console.log(i)
// }


// 2.
 
// for(let a=10 ; a >=1 ; a--){
//     console.log(a)
// } 
 

// 3.

// function studentClass(grade){
//     if(grade >=90){
//         console.log("A");
//     }else if (grade >=80){
//         console.log("B")
//     }else if(grade >=70){
//         console.log("C");
//     }else if(grade >=60){
//         console.log("D")
//     }else if(grade >=50){
//         console.log("E")
//     }else{
//         console.log("F")
//     }
// }

// 4.

// let employees = ["Lara", "Evee", "Simi"];
// let salary = [1000, 2000, 120.90];

// // Check if both arrays have the same length
// if (employees.length === salary.length) {
//     // Iterate over each index of the arrays
//     for (let i = 0; i < employees.length; i++) {
//         // Print the name of the employee and their salary
//         console.log(`Employee name: ${employees[i]}, Employee salary: ${salary[i]}`);
//     }
// } else {
//     console.log("Error: Number of employees does not match the number of salaries.");
// }


// 5.

// for(let x = 1 ;x <= 10 ; x++){
//     if(x%2 ==0){
//         console.log(x)
//     }
// }

// 6.

// function countOddEvenNumbers(numbers) {
//     let oddCount = 0;
//     let evenCount = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 === 0) {
//             evenCount++;
//         } else {
//             oddCount++;
//         }
//     }

//     return { odd: oddCount, even: evenCount };
// }

// // List of numbers from 1 to 10
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Count odd and even numbers
// const counts = countOddEvenNumbers(numbers);

// console.log("Odd numbers:", counts.odd);
// console.log("Even numbers:", counts.even);


// 7.

// for (let i = 1; i <= 100; i++) {
//     // Check if the number is a multiple of both 3 and 5 first, since it's a special case
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     }
//     // Check if the number is a multiple of 3
//     else if (i % 3 === 0) {
//         console.log("Fizz");
//     }
//     // Check if the number is a multiple of 5
//     else if (i % 5 === 0) {
//         console.log("Buzz");
//     }
//     // If the number is not a multiple of 3 or 5, simply print the number
//     else {
//         console.log(i);
//     }
// }

// 8.

    // function calculateSum(numbers) {
    //     let sum = 0;
    //     for (let i = 0; i < numbers.length; i++) {
    //         sum += numbers[i];
    //     }
    //     return sum;
    // }

    // // Example usage:
    // const numbers = [1, 2, 3, 4, 5];
    // const result = calculateSum(numbers);
    // console.log("Sum of numbers:", result);

// 9.

// function isPrime(num) {
//     // Check if num is less than 2
//     if (num < 2) {
//         return false;
//     }
//     // Check if num is divisible by any number from 2 to the square root of num
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true; // If no divisors found, num is prime
// }

// // Iterate through numbers from 1 to 100 and print prime numbers
// for (let i = 1; i <= 100; i++) {
//     if (isPrime(i)) {
//         console.log(i);
//     }
// }

//10.

// function findLargestNumber(arr) {
//     // Check if the array is empty
//     if (arr.length === 0) {
//         return "Array is empty";
//     }

//     let largest = arr[0]; // Assume the first element is the largest

//     // Iterate through the array starting from the second element
//     for (let i = 1; i < arr.length; i++) {
//         // If the current element is larger than the current largest, update the largest
//         if (arr[i] > largest) {
//             largest = arr[i];
//         }
//     }

//     return largest; // Return the largest number found
// }

// // Example usage:
// const numbers = [10, 5, 20, 8, 15];
// const largestNumber = findLargestNumber(numbers);
// console.log("The largest number in the array is:", largestNumber); // Output: The largest number in the array is: 20


/*
    =   assignment operator
    ==  comparison operator (compare if values are equal)
    === strict equality operator (compare if values & datatype are equal)
    !=  inequality operator
    !== strict inequality operator

*/

    // const PI = 3.14;

    // if(PI == "3.14"){
    //     console.log("That is pi")
    // }else{
    //     console.log("That is not pi")
    // }
















































// let a = {'name':'sok'};
// b= a
// a.age= 10;

// console.log('a:',a, 'b:',b);