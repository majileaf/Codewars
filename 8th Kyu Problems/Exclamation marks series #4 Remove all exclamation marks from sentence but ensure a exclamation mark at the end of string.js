/*
Description:
Remove all exclamation marks from sentence but ensure 
a exclamation mark at the end of string. 

For a beginner kata, you can assume that the input data is 
always a non empty string, no need to verify it.

Examples
remove("Hi!") === "Hi!"
remove("Hi!!!") === "Hi!"
remove("!Hi") === "Hi!"
remove("!Hi!") === "Hi!"
remove("Hi! Hi!") === "Hi Hi!"
remove("Hi") === "Hi!"
*/

// initial solution: 
// const remove = string => string.split('').filter(e => e !== '!').join('') + "!";

const remove = string => string.split('!').join('').concat('!');

console.log(remove("Hi!")) // "Hi!"
console.log(remove("Hi!!!")) // "Hi!"
console.log(remove("!Hi")) // "Hi!"
console.log(remove("!Hi!")) // "Hi!"
console.log(remove("Hi! Hi!")) // "Hi Hi!"
console.log(remove("Hi")) // "Hi!"