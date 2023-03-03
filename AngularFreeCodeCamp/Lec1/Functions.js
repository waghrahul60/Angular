"use strict";
// three types you can write the functions.
// name Function
function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(2, 6));
//num3 optional para
console.log(add(2, 6, 7));
// => function
const sub = (num1, num2, num3 = 10) => num1 - num2 - num3;
console.log(sub(30, 2));
//num3 req para
console.log(sub(30, 2, 5));
// Function expression
const mult = function (num1, num2) {
    return num1 * num2;
};
// rust parameter
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [1, 2, 3, 4, 5];
console.log(add2(2, 3, ...numbers));
console.log(add2(2, 3, ...[5, 8, 7]));
console.log(add2(2, 3, 4, 5, 6, 7, 8));
// Generic Functions
function getItems(items) {
    return new Array().concat(items);
}
let concatResult = getItems([1, 2, 3, 4, 5, 6]);
let concatString = getItems(["r", "a", "h", "u", "l"]);
console.log(concatResult);
console.log(concatString);
