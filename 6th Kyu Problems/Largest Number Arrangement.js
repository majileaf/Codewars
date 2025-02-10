/* Largest Number Arrangement
Create a function that takes a list of one or more non-negative integers, 
and arranges them such that they form the largest possible number.

Examples:
[4, 50, 8, 145] returns 8504145 (8-50-4-145)
[4, 40, 7] returns 7440 (7-4-40)
[4, 46, 7] returns 7464 (7-46-4)
[5, 60, 299, 56] returns 60565299 (60-56-5-299)
[5, 2, 1, 9, 50, 56] returns 95655021 (9-56-5-50-21)
*/

const makeStr = (a, b) => Number(`${a}` + `${b}`);
const largestArrangement = array => +array.slice().sort((a, b) => makeStr(a, b) > makeStr(b, a) ? -1 : 1).join('');

console.log(largestArrangement([4, 50, 8, 145])) // 8504145
console.log(largestArrangement([4, 40, 7])) // 7440
console.log(largestArrangement([4, 46, 7])) // 7464
console.log(largestArrangement([5, 60, 299, 56])) // 60565299
console.log(largestArrangement([5, 2, 1, 9, 50, 56])) // 95655021

console.log(largestArrangement([8, 6, 590, 70])) // 8706590
console.log(largestArrangement([6, 73, 79, 356, 7])) // 797736356
console.log(largestArrangement([64, 29, 5, 9, 982, 3])) // 9982645329
console.log(largestArrangement([3487, 103559, 243])) // 3487243103559
console.log(largestArrangement([7, 78, 79, 72, 709, 7, 94])) // 9479787772709