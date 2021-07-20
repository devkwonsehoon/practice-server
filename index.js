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
let personArray = [
  {"name": "John Doe", "age": 20},
  {"name": "Jane Doe", "age": 19},
  {"name": "Fred Doe", "age": 32},
  {"name": "Chris Doe", "age": 45},
  {"name": "Layla Doe", "age": 37},
];

const getAgeAverage = (personArray) => {
  let sum = 0;

  personArray.forEach(person => {
    sum += person['age']  
  });

  const avg = sum / personArray.length;
  return avg
}

console.log(getAgeAverage(personArray));