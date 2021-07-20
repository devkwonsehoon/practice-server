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

const students = ["kwon", "se", "hoon"];

// for ( let i = 0; i < students.length; i++ ){
//   console.log(students[i])
// }

// // == ES6 new for grammar ==
// // python for a in array 같은 느낌
// for (let student of students){
//   console.log(student)
// }

// // 배열의 인덱스를 추출해줌
// for (let index in students) {
//   console.log(students[index])
// }

// ES6 Array 내장 함수
// 배열 안에 있는 값들 하나하나를 콜백함수의 인자로 넣어줌
students.forEach((student) => {
  console.log(student)
})