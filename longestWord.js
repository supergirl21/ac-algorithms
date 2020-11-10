//Find the Longest Word in a String

//Return the length of the longest word in the provided sentence.

//Your response should be a number.

//Here are some helpful links:

//String.split() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
//String.length https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length

//TEST CASES
// findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord("The quick brown fox jumped over the lazy dog") should return a number.
// findLongestWord("The quick brown fox jumped over the lazy dog") should return 6.
// findLongestWord("May the force be with you") should return 5.
// findLongestWord("Google do a barrel roll") should return 6.
// findLongestWord("What is the average airspeed velocity of an unladen swallow") should return 8.
// findLongestWord("What if we try a super-long word such as otorhinolaryngology") should return 19.


function findLongestWord(str) {
  //split the word
var splitWord = str.split(" ");
 //log the words to split
console.log(splitWord);
  // split the character in a word in an array
var char = splitWord.length;
  // console.log(char);
  //loop for each word to find the number of characters per word
var word =0;
    for (var i=0; i<splitWord.length; i++){
// var longestWord = 0;
//compare the splitWord to each other for the longest word
//create a var for the longest word and set to 0.
   var longestWord = splitWord[i].length;
        if (longestWord>word){
            word = longestWord;
            }
// console.log(longestWord);
}
console.log(word);
}
findLongestWord("Google do a barrel roll");
findLongestWord("May the force be with you");

