//3- var number1 = Number(window.prompt("Enter Number1"));
// var number2 = Number(window.prompt("Enter Number2"));

// if (number1 > number2) {
//   console.log(number1);
// } else {
//   console.log(number2);
// }

//4- var number1 = Number(window.prompt("Enter Number1"));
// if (number1 < 0) {
//   console.log("negative");
// } else {
//   console.log("postive");
// }

// 5- var number1 = Number(window.prompt("Enter Number1"));
// var number2 = Number(window.prompt("Enter Number2"));
// var number3 = Number(window.prompt("Enter Number3"));

// var max = Math.max(number1, number2, number3);
// var min = Math.min(number1, number2, number3);

// console.log(`max element = ${max}`);
// console.log(`min element = ${min}`);

// 6-
// var num = Number(window.prompt("Enter Number"));

// if (num % 2 === 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }

// 8-
// var x = window.prompt("Enter Letter");
// console.log(x);

// if (x == "a" || x == "e" || x == "i" || x == "o" || x == "u") {
//   console.log("vowel");
// } else {
//   console.log("Consonant");
// }

//9-

// var num = Number(window.prompt("Enter Number"));

// for (i = 1; i <= num; i++) {
//   console.log(i);
// }

//10
// var num = Number(window.prompt("Enter Number"));

// for (i = 1; i <= 12; i++) {
//   console.log(i * num);
// }

//11
// var num = Number(window.prompt("Enter Number"));

// for (i = 1; i < num; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

//12

// var num = Number(window.prompt("Enter Number1"));
// var power = Number(window.prompt("Enter Number2"));
// var result = 1;
// for (i = 1; i <= power; i++) {
//   result *= num;
// }

// console.log(result);

//13

var number1 = Number(window.prompt("Enter Number1"));
var number2 = Number(window.prompt("Enter Number2"));
var number3 = Number(window.prompt("Enter Number3"));
var number4 = Number(window.prompt("Enter Number4"));
var number5 = Number(window.prompt("Enter Number5"));

// var total1 =0

// for(var i =0 ;i<5;i++){
//       total1+=Number( window.prompt("Enter mark subject"+(i+1)));
//   }

var total = number1 + number2 + number3 + number4 + number5;
var average = total / 5;
var percentage = (total / (100 * 5)) * 100;

console.log(`total= ${total}, average= ${average},percentage =${percentage} `);
