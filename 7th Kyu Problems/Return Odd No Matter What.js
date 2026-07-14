/* [Code Golf] Return Odd No Matter What
Given the integer n return odd numbers as they are, but subtract 1 from even numbers.

Note:
Your solution should be 22 or less characters long.

Examples
Input  = 2
Output = 1

Input  = 13
Output = 13

Input  = 46
Output = 45
*/

alwaysOdd=n=>n%2?n:n-1

console.log(alwaysOdd(1)) // 1
console.log(alwaysOdd(2)) // 1
console.log(alwaysOdd(5)) // 5
console.log(alwaysOdd(8)) // 7
console.log(alwaysOdd(-3)) // -3
console.log(alwaysOdd(-14)) // -15
console.log(alwaysOdd(-19)) // -19