/*
Description:
Remove an exclamation mark from the end of a string. 
For a beginner kata, you can assume that the input data 
is always a string, no need to verify it.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi!!"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
Note
Please don't post issue about difficulty or duplicate.
*/

const remove = string => string[string.length - 1] === '!' ? string.slice(0, -1) : string;

console.log(remove("Hi!")) //  "Hi"
console.log(remove("Hi!!!")) //  "Hi!!"
console.log(remove("!Hi")) //  "!Hi"
console.log(remove("!Hi!")) //  "!Hi"
console.log(remove("Hi! Hi!")) //  "Hi! Hi"
console.log(remove("Hi")) //  "Hi"