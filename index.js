/**
 * @desc ES6 grammar review
 */

// function getAgeAverage(personArray) {
// 	var average = 0;
//   var sum = 0;

//   for ( var i = 0; i<personArray.length; i++) {
//     sum += personArray[i]['age'];
//   }

//   average = sum / personArray.length;
// 	return average;
// }

// var personArray = [
// 										{"name": "John Doe", "age": 20},
// 										{"name": "Jane Doe", "age": 19},
// 										{"name": "Fred Doe", "age": 32},
// 										{"name": "Chris Doe", "age": 45},
// 										{"name": "Layla Doe", "age": 37},
// 									];

// console.log(getAgeAverage(personArray)); // 30.6

// const students = ["kwon", "se", "hoon"];

// for ( let i = 0; i < students.length; i++ ){
//   console.log(students[i])
// }


/**
 * @desc ES6 for
 */

// // python for a in array 같은 느낌
// for (let student of students){
//   console.log(student)
// }

// // 배열의 인덱스를 추출해줌
// for (let index in students) {
//   console.log(students[index])
// }

// // ES6 Array 내장 함수
// // 배열 안에 있는 값들 하나하나를 콜백함수의 인자로 넣어줌
// students.forEach((student) => {
//   console.log(student)
// })

/**
 * @desc ES6 arrow function
 */

//  function hello() {
// 	console.log("Hello function");
// }

// // 첫번째 arrow function
// const arrowFunction = () => {
// 	console.log("Hello arrow function");
// }

// // 두번째 arrow function
// const arrowFunctionWithoutReturn = () => console.log("Hello arrow function without return");

// hello(); // Hello function
// arrowFunction(); // Hello arrow function
// arrowFunctionWithoutReturn(); // Hello arrow function without return


// arrow function and forEach example
// let personArray = [
//   {"name": "John Doe", "age": 20},
//   {"name": "Jane Doe", "age": 19},
//   {"name": "Fred Doe", "age": 32},
//   {"name": "Chris Doe", "age": 45},
//   {"name": "Layla Doe", "age": 37},
// ];

// const getAgeAverage = (personArray) => {
//   let sum = 0;

//   personArray.forEach(person => {
//     sum += person['age']  
//   });

//   const avg = sum / personArray.length;
//   return avg
// }

// console.log(getAgeAverage(personArray));


/**
 * @desc ES6 Promise
 */
//  const isReady = true;
//  // 1. Producer
//  const promise = new Promise((resolve, reject) => {
//    console.log("Promise is created!");
//    if (isReady) {
//      resolve("It's ready");
//    } else {
//      reject("Not ready");
//    }
//  });
 
 // 2. Consumer
//  promise
//    // promise에서 resolve가 될경우
//    .then(messsage => {
//      console.log(messsage);
//    })
//    // promise에서 reject가 될경우
//    .catch(error => {
//      console.error(error);
//    })
 
//  // Promise is created!
//  // It's ready


/**
 * @desc ES6 async, await
 * @기능 promise를 더 쉽게 만들고 코드의 가독성까지 좋게 만들어준다.
 */

// async function f() {

//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("완료!"), 1000)
//   });

//   let result = await promise; // 프라미스가 이행될 때까지 기다림 (*)

//   console.log(result); // "완료!"
// }

// f();