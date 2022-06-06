/*
Write a function that takes a positive integer n, 
sums all the cubed values from 1 to n, and returns that sum.

Assume that the input n will always be a positive integer.

Examples: (Input --> output)
2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)
*/

const sumCubes = n => n ** 2 * (n + 1) ** 2 / 4;

console.log(sumCubes(1)) // 1
console.log(sumCubes(2)) // 9
console.log(sumCubes(3)) // 36
console.log(sumCubes(4)) // 100
console.log(sumCubes(10)) // 3025
console.log(sumCubes(123)) // 58155876