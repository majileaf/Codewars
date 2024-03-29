/* Possibilities Array
A non-empty array a of length n is called an array of all possibilities 
if it contains all numbers between [0,a.length-1].

Write a method named isAllPossibilities that accepts an integer array and 
returns true if the array is an array of all possibilities, else false.

Example:
a=[1,2,0,3]
a.length-1=3 
a includes [0,3] ,hence the function should return true
*/

// initial solution:
// const isAllPossibilities = x => {
//     x = x.sort((a, b) => a - b);
//     return Object.keys(x).every((e, i) => e == x[i]);
// }

const isAllPossibilities = x => x.length > 0 && x.sort((a, b) => a - b).every((e, i) => e == i);

console.log(isAllPossibilities([0,1,2,3])) // true
console.log(isAllPossibilities([1,2,3,4])) // false
console.log(isAllPossibilities([1,2,0,3])) // true