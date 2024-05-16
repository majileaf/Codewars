/* Magic Sum of 3s
The magic sum of 3s is calculated on an array by summing up odd numbers which include the digit 3. 
Write a function magic_sum which accepts an array of integers and returns the sum.

Example: [3, 12, 5, 8, 30, 13] results in 16 (3 + 13)

If the sum cannot be calculated, 0 should be returned.
*/

const magicSum = numbers => numbers.reduce((sum, n) => sum + (n % 2 !== 0  && String(n).includes('3') ? n : 0), 0);

console.log(magicSum([3])) // 3
console.log(magicSum([3, 13])) // 16
console.log(magicSum([30, 34, 330])) // 0
console.log(magicSum([3, 12, 5, 8, 30, 13])) // 16
console.log(magicSum([])) // 0