/* number with 3 roots. 
In mathematics, an nth root of a number x, where n is usually assumed to be a positive integer, is a number r which, 
when raised to the power n, yields x:

r^n=x,

Given number n, such that n > 1, find if its 2nd root, 4th root and 8th root are all integers (fractional part is 0), 
return true if it exists, false if not.

// 2nd root of 256 is 16
// 4th root of 256 is 4
// 8th root of 256 is 2
perfectRoots(256) // returns true 
*/

const perfectRoots = n => !(n ** (1 / 8) % 1);

console.log(perfectRoots(256)) // true
console.log(perfectRoots(1000)) // false
console.log(perfectRoots(6561)) // true