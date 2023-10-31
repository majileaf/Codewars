/* Two numbers are positive
Task:
Your job is to write a function, which takes three integers a, b, and c as arguments, 
and returns True if exactly two of of the three integers are positive numbers 
(greater than zero), and False - otherwise.

Examples:
twoArePositive(2, 4, -3) == true
twoArePositive(-4, 6, 8) == true
twoArePositive(4, -6, 9) == true
twoArePositive(-4, 6, 0) == false
twoArePositive(4, 6, 10) == false
twoArePositive(-14, -3, -4) == false
*/

const twoArePositive = (a, b, c) => [a, b, c].filter(e => e > 0).length === 2;

// alternatively:
// const twoArePositive = (...args) => args.filter(e => e > 0).length === 2;

console.log(twoArePositive(2, 4, -3)) // true
console.log(twoArePositive(-4, 6, 8)) // true
console.log(twoArePositive(4, -6, 9)) // true
console.log(twoArePositive(4, 6, 0)) // true
console.log(twoArePositive(-4, 6, 0)) // false
console.log(twoArePositive(4, 6, 10)) // false
console.log(twoArePositive(-14, -3, -4)) // false