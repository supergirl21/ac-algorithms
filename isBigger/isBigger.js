/*
Given two numbers, a, b, as inputs, return true if a > b,
return false if a < b, return 0 otherwise.

Create a function that takes in 2 parameters/inputs
Use if/else conditional statement
	is a bigger thatn b?
	is a smaller than b?
	is a equal to b?

Output: print/console.log "true", "false" or 0

Bonus 1: If a or b is undefined or not a number, then return -1.
Hint: Chekout typeof() operator at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

*/

/**
Examples:

var result = isBigger(3,4);
console.log(result) // false

var result = isBigger(13,4);
console.log(result) // true

var result = isBigger(4.00001,4);
console.log(result) // true

var result = isBigger(4,4);
console.log(result) // 0

var result = isBigger("potato",4);
console.log(result) // -1

var result = isBigger("4",4);
console.log(result) // -1

var result = isBigger(3);
console.log(result) // -1

var result = isBigger();
console.log(result) // -1

**/

	var a = parseInt(prompt("Give a value for the first number."));
	var b = parseInt(prompt("Give a value for the second number."));

function isBigger(a, b) {
	
	if  (a > b) {
		console.log("True");
	} else if  (a < b) {
		console.log("False");
	} else
		console.log("0");
}
isBigger(a,b);

