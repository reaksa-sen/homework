//1.

// const colors = ["Red", "Blue", "Green"];

// // Destructuring the array to extract the first and third elements
// const [firstColor, , thirdColor] = colors;

// console.log("First color:", firstColor); // Output: First color: Red
// console.log("Third color:", thirdColor); // Output: Third color: Green


//2.

// const person = { name: "Alice", age: 25, job: "Developer" };

// // Destructuring the object to extract 'name' and 'age' properties
// const { name, age } = person;

// // Logging out the extracted properties
// console.log("Name:", name); // Output: Name: Alice
// console.log("Age:", age);   // Output: Age: 25


//3.

// const user = { id: 1, name: "Sok", address: { street: "123 Main St", city: "PP" } };

// // Destructuring the nested address object to extract 'street' and 'city' properties
// const { address: { street, city } } = user;

// // Logging out the extracted properties
// console.log("Street:", street); // Output: Street: 123 Main St
// console.log("City:", city);     // Output: City: PP


//4. 

// -----concat()

// const nums1 = [1, 2, 3];
// const nums2 = [4, 5, 6];

// const mergedArray = nums1.concat(nums2);

// console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

// -----operator(...)

// const nums1 = [1, 2, 3];
// const nums2 = [4, 5, 6];

// const mergedArray = [...nums1, ...nums2];

// console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]


//5.

// function sumAll(...args) {
//     // Use reduce method to calculate the sum of all arguments
//     const sum = args.reduce((acc, curr) => acc + curr, 0);
//     return sum;
//   }
  
//   // Test cases
//   console.log(sumAll(1, 2));               // Output: 3
//   console.log(sumAll(1, 2, 3, 4, 5));      // Output: 15
//   console.log(sumAll(10, 20, 30));         // Output: 60
//   console.log(sumAll(5));                  // Output: 5
//   console.log(sumAll());                   // Output: 0


//6.

// const points = [{ x: 1, y: 2 }, { x: 2, y: 3 }, { x: 3, y: 4 }];

// // Destructure the array to extract the first point and store the remaining points
// const [firstPoint, ...otherPoints] = points;

// console.log("First point:", firstPoint); // Output: {x: 1, y: 2}
// console.log("Other points:", otherPoints); // Output: [{x:2, y:3}, {x:3, y:4}]

//7.

// function filterProps(obj, ...propsToFilter) {
//     // Destructure the object and exclude properties specified in propsToFilter
//     const { [propsToFilter]: _, ...filteredObj } = obj;
//     return filteredObj;
//   }
 
//   // Test case
//   const object = { a: 1, b: 2, c: 3, d: 4 };
//   const filteredObject = filterProps(object, "b", "d");
//   console.log(filteredObject); // Output: { a: 1, c: 3 }





