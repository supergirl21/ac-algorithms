/*

Given a string, swap the case of each character and retunr it.
Assume the string has only letters.

Hint 1: Check out indexOf() method at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf

Hint 2: Check toLowerCase and toUpperCase methods at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

Bonus: If the string has non-letter characters, leave them as they are.

*/

/**
Examples:

var result = swapCase("Hello World")
console.log(result) // "hELLO wORLD"

var result = swapCase("");
console.log(result) // ""

Bonus:
var result = swapCase("Oh, Hello!!");
console.log(result) // "oH, hELLO!!"

**/

function swapCase(str) {
	//swap the uppercase to lowercase and vice-versa
	// create a new variable for the new string
	var newStr = "";
   
	//loop through each character 
		for (var i=0; i<str.length; i++){
		  if (str[i] === str[i].toLowerCase()){
			newStr += str[i].toUpperCase();
		   
		  } else if (str[i] === str[i].toUpperCase()){
			newStr += str[i].toLowerCase();
		  } else 
		  console.log(newString);
		}
  
	   console.log(newStr);
	return newStr;
  }
  swapCase("Hello World  123");