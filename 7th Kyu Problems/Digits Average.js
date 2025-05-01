/* Digits Average
Given a non-negative integer, take the (mean) average of each pair of consecutive digits. 
Repeat this process until you have a single integer, then return that integer. e.g.

Note: if the average of two digits is not an integer, round the result up 
(e.g. the average of 8 and 9 will be 9)

Examples
Integer 246  ==>  Should return 4

original: 2   4   6
           \ / \ /
1st iter:   3   5
             \ /
2nd iter:     4


Integer 89  ==>  Should return 9

original: 8   9
           \ /
1st iter:   9
*/

const nDigits = n => Math.floor(Math.log10(n)) + 1;
const digitsAverage = input => nDigits(input) === 1 
    ? +input 
    : digitsAverage([...Array(nDigits(input) - 1)].map((_, i) => Math.ceil((Math.floor(input / 10 ** (nDigits(input) - 1 - i) % 10) + Math.floor(input / 10 ** (nDigits(input) - 2 - i) % 10)) / 2)).join(''));

console.log(digitsAverage(246)) // 4
console.log(digitsAverage(89)) // 9
console.log(digitsAverage(2)) // 2
console.log(digitsAverage(245)) // 4
console.log(digitsAverage(345)) // 5
console.log(digitsAverage(346)) // 5