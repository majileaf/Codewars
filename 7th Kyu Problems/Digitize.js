/*
Given a non-negative integer, return an array / a list 
of the individual digits in order.

Examples:
123 => [1,2,3]
1 => [1]
8675309 => [8,6,7,5,3,0,9]
*/

// initial solution:
// const digitize = n => [...String(n)].map(e => Number(e));

const digitize = n => [...String(n)].map(Number);

console.log(digitize(123)) // [1,2,3]
console.log(digitize(1)) // [1]
console.log(digitize(0)) // [0]
console.log(digitize(1230)) // [1,2,3, 0]
console.log(digitize(8675309)) // [8,6,7,5,3,0,9]