//1.

// function usersAbove18(users) {
//     return users.filter(user => user.age > 18);
//   }
  
//   // Example usage:
//   const users = [
//     { name: 'reaksa', age: 20 },
//     { name: 'sivteang', age: 16 },
//     { name: 'kimsean', age: 25 },
//     { name: 'mak', age: 18 }
//   ];
  
//   const usersAbove18 = usersAbove18(users);
//   console.log(usersAbove18);

//2.

// const numbers = [1, 2, 3, 4, 3, 2, 5, 6, 5, 4];
// const uniqueNumbers = numbers.filter((value, index, self) => self.indexOf(value) === index);
// console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5, 6]


// 3.

// const users = [
//   { name: 'John', age: 30 },
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 35 }
// ];
// const names = users.map(user => user.name);
// console.log(names); // Output: ['John', 'Alice', 'Bob']


//4.

// const dates = ["2024-01-01", "2024-02-02", "2024-04-04"];
// const formattedDates = dates.map(date => {
//     const [year, month, day] = date.split('-');
//     return `${day}/${month}/${year}`;
// });
// console.log(formattedDates); // Output: ['01/01/2024', '02/02/2024', '04/04/2024']


//5.

// const numbers = [10, 5, 8, 15, 3];
// const maxNumber = numbers.reduce((max, current) => Math.max(max, current), -Infinity);
// console.log(maxNumber); // Output: 15


//6.

// const items = [
//   { name: "Bread", category: "Grocery" },
//   { name: "Butter", category: "Grocery" },
//   { name: "Shampoo", category: "Personal Care" }
// ];
// const groupedItems = items.reduce((acc, item) => {
//   acc[item.category] = acc[item.category] || [];
//   acc[item.category].push(item.name);
//   return acc;
// }, {});
// console.log(groupedItems);
// Output: { "Grocery": ["Bread", "Butter"], "Personal Care": ["Shampoo"] }
