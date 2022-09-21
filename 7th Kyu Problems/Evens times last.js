/* Evens times last
Given a sequence of integers, return the sum of all the integers that 
have an even index (odd index in COBOL), multiplied by the integer at 
the last index.

Indices in sequence start from 0.

If the sequence is empty, you should return 0.
*/

const evenLast = numbers => numbers.length 
    ? numbers.reduce((sum, n, i) => sum + (i % 2 === 0 ? n : 0), 0) * numbers[numbers.length - 1] 
    : 0;

console.log(evenLast([2, 3, 4, 5])) // 30