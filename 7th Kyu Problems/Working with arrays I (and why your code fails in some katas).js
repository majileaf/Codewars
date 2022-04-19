/*
In this kata the function returns an array/list of numbers
without its last element. The function is already written 
for you and the basic tests pass, but random tests fail. 
Your task is to figure out why and fix it.

Good luck!

Hint: watch out for side effects.

Some good reading: MDN Docs about arrays
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

// original starter function:
// function withoutLast(arr) {
//     // Fix it
//     arr.pop(); // removes the last element
//     return arr;
// }

// solution:
const withoutLast = arr => arr.slice(0,-1);

console.log(withoutLast([1, 2, 3, 4, 5])) //  [1, 2, 3, 4]
console.log(withoutLast([6, 7, 8, 9])) //  [6, 7, 8]

// the purpose behind this kata:
// console.log("The lessons here were: read the docs and <strong>DON'T MUTATE THE INPUT</strong>\n","")  
// console.log("Some katas use the input after you've processed it\n(in this case I made that on purpose),\nmutating it makes the tests fail, so watch out.","")  