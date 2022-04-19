/*
In this kata the function returns an array/list like the one 
passed to it but with its nth element removed (
with 0 <= n <= array/list.length - 1). 

The function is already written for you and the basic tests pass, 
but random tests fail. Your task is to figure out why and fix it.

Good luck!
Some good reading: MDN Docs about arrays
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

// original starter function:
// function removeNthElement(arr, n) {
//     // Fix it
//     var arrCopy = arr;
//     arrCopy.splice(n, 1); // removes the nth element
//     return arrCopy;
// }

// initital solution:
// function removeNthElement(arr, n) {
//     const arrCopy = arr.slice(); // fixed
//     arrCopy.splice(n, 1);
//     return arrCopy;
// }

// alternatively: 
const removeNthElement = (arr, n) => arr.slice(0, n).concat(arr.slice(n + 1));

console.log(removeNthElement([1, 2, 3, 4, 5], 4)) //  [1, 2, 3, 4]
console.log(removeNthElement([9, 7, 6, 9], 0)) //  [7, 6, 9]