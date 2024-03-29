/* Is n divisible by (...)?
Create a function isDivisible(n,...) that checks if the first argument n 
is divisible by all other arguments (return true if no other arguments)

Example:
isDivisible(6,1,3)--> true because 6 is divisible by 1 and 3
isDivisible(12,2)--> true because 12 is divisible by 2
isDivisible(100,5,4,10,25,20)--> true
isDivisible(12,7)--> false because 12 is not divisible by 7
*/

// initial solution:
// const isDivisible = (...arr) => arr.slice(1).every(e => arr[0] % e === 0);

const isDivisible = (first, ...arr) => arr.every(e => first % e === 0);

console.log(isDivisible(6,1,3)) // true
console.log(isDivisible(12,2)) // true
console.log(isDivisible(100,5,4,10,25,20)) // true
console.log(isDivisible(12,7)) // false

console.log(isDivisible(3,3,4)) // false
console.log(isDivisible(12,3,4)) // true
console.log(isDivisible(8,3,4,2,5)) // false