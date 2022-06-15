/*
Given a number n and two values firstValue and secondValue, 
build an array of size n filled with firstValue and secondValue alternating.

for input:                5, true, false
expected result would be: [true, false, true, false, true]
*/

const alternate = (n, firstValue, secondValue) => [...Array(n)].map((_, i) => i % 2 === 0 ? firstValue : secondValue);

console.log(alternate(5, true, false)) // [true, false, true, false, true]
console.log(alternate(20, 'blue', 'red')) // ['blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red']
console.log(alternate(0, "lemons", "apples")) // []