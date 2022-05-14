/*
You are given an odd-length array of integers, in which all 
of them are the same, except for one single number.

Complete the method which accepts such an array, and returns 
that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/

// initial solution: 
// const stray = numbers => {
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[0] !== numbers[i]) return numbers[i];
//     }
//     return numbers[0];
// }

const stray = numbers => numbers.filter(e => numbers.indexOf(e) === numbers.lastIndexOf(e))[0];

console.log(stray([1, 1, 2])) // 2