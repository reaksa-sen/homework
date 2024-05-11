//simple function
// console.log(Sum(10,2))
// function Sum(a,b){
//     return a+b;
// }


//

//expression function
// let Sum = function(a,b){
//     return a+b;
// }
//  console.log(Sum(4,2))

//arrow function

// let sum = (a,b) => a+b
// console.log( sum(2,2))

//anuonymuos function

// ((a,b) => a+b)(2,3)

// console.log((2,3))



/*

callback function is a function that passed a function to another function.

*/

// hello(goodbye,2,3)

// function hello(callback,a,b){
//     console.log("hello!")
//     callback();
//     goodbye1(a,b)
// }

// function goodbye(){
//     console.log("goodbye!")
// }

// function goodbye1(a,b){
//     let sum = a+b;
//     console.log(sum)
// }



/*
promise is talk about that we waiting everyone
*/

// const fetchData = () => {
//     return new Promise((resole,reject) =>{
//         let isFail = false;

//         setTimeout(() => {
            
//         }, 300);
//     })
// }

 
// const { log } = require('console');
// testing readfile

// const fs = require('fs')
// function ReadFile (filePath){
//     fs.readFile(filePath,'utf-8',(err,data) =>{
//         if(err){
//             console.log(err)
//         }else {
//             console (data)
//         }
//     })
// }

//  ReadFile('text.txt')




//writefile
// const fs = require('fs')
// function WriteFile(filePath,data){
//     fs.writeFile(filePath,data,(err) =>{
//         if(err) console.log(err)
//         console.log('success writing')
//     })
// }


// Element is array

// const fruits = ['banana', 'apple', 'orange']


// const [first,second] = fruits;

// console.log(fruits);




// console.log("Learn about promise ")


// const fetchData = () =>{
//     return new Promise((resolve, reject) =>{

//         let isFail = false;

//         setTimeout(() =>{
//             if(isFail){
//                 reject("Error")
//             }else{
//                 resolve("data")
//             }
//         },2000);

//     })
// }

// console.log(fetchData());
























function task1(callback) {
    console.log('Starting task 1');
    setTimeout(() => {
      console.log('Finished task 1');
      callback(); 
    }, 2000);
  }
  
  function task2(callback) {
    console.log('Starting task 2');  
    setTimeout(() => {
      console.log('Finished task 2');
      callback();
    }, 1000);
  }
  
  function task3(callback) {
    console.log('Starting task 3');
    setTimeout(() => {  
      console.log('Finished task 3');
      callback();
    }, 1500);
  }
  
  task1(() => {
    task2(() => {
      task3(() => {
        console.log('All tasks completed!');
      });
    });
  });
