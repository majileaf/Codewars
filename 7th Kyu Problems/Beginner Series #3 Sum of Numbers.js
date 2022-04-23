/*
Given two integers a and b, which can be positive or negative, 
find the sum of all the integers between and including them 
and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
*/

// initial solution:
// const getSum = (a, b) => Array.from({length: Math.max(a, b) - Math.min(a, b) + 1}, (_, i) => Math.min(a, b) + i).reduce((sum, n) => sum + n, 0);

// using arithmetic progression:
// const getSum = (a, b) => {
//    const max = Math.max(a,b),
//          min = Math.min(a,b)
//    return (max - min + 1) * (max + min) / 2;
// }

// shorter:
const getSum = (a, b) => (Math.abs(a - b) + 1) * (a + b) / 2;

console.log(getSum(0, -1)) // -1
console.log(getSum(0, 1)) // 1
console.log(getSum(1, 0)) //  --> 1 (1 + 0 = 1)
console.log(getSum(1, 2)) //  --> 3 (1 + 2 = 3)
console.log(getSum(0, 1)) //  --> 1 (0 + 1 = 1)
console.log(getSum(1, 1)) //  --> 1 (1 since both are same)
console.log(getSum(-1, 0)) //  --> -1 (-1 + 0 = -1)
console.log(getSum(-1, 2)) //  --> 2 (-1 + 0 + 1 + 2 = 2)