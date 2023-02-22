/* Is It Negative Zero (-0)?
There exist two zeroes: +0 (or just 0) and -0.

Write a function that returns true if the input number is -0 and 
false otherwise (True and False for Python).

In JavaScript / TypeScript / Coffeescript the input will be a number.

In Python / Java / C / NASM / Haskell / the input will be a float.
*/

const isNegativeZero = n => Object.is(n, -0);

console.log(isNegativeZero(-0)) // true
console.log(isNegativeZero(-Infinity)) // false
console.log(isNegativeZero(-5)) // false
console.log(isNegativeZero(-4)) // false
console.log(isNegativeZero(-3)) // false
console.log(isNegativeZero(-2)) // false
console.log(isNegativeZero(-1)) // false
console.log(isNegativeZero(-Number.MIN_VALUE)) // false
console.log(isNegativeZero(0)) // false
console.log(isNegativeZero(Number.MIN_VALUE)) // false
console.log(isNegativeZero(1)) // false
console.log(isNegativeZero(2)) // false
console.log(isNegativeZero(3)) // false
console.log(isNegativeZero(4)) // false
console.log(isNegativeZero(5)) // false
console.log(isNegativeZero(Infinity)) // false