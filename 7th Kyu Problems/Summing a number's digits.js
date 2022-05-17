/*
Write a function named sumDigits which takes a number as input 
and returns the sum of the absolute value of each of the number's 
decimal digits.

For example: (Input --> Output)
10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.
*/

// initial solution:
// const sumDigits = number => String(number).split('').reduce((sum, n) => sum + (n == parseFloat(n) ? Number(n) : 0), 0);

const sumDigits = number => [...String(Math.abs(number))].reduce((sum, n) => sum + Number(n), 0);

console.log(sumDigits(10)) // 1
console.log(sumDigits(99)) // 18
console.log(sumDigits(-32)) // 5