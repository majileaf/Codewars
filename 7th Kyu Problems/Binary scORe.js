/* Binary scORe
Given a number n, define its scORe to be 0 | 1 | 2 | 3 | .. | n, where | is the bitwise OR operator.

Write a function that takes n and finds its scORe.

        n |   scORe n
----------|----------
        0 |         0
        1 |         1
       49 |        63
1 000 000 | 1 048 575
*/

// initital solution:
// const score = n => Math.max(2 ** Math.floor(Math.log(n) / Math.log(2)) * 2 - 1, 0);

const score = n => Math.max(2 ** (Math.floor(Math.log2(n)) + 1) - 1, 0);

console.log(score(0)) // 0
console.log(score(1)) // 1
console.log(score(49)) // 63
console.log(score(1000000)) // 1048575