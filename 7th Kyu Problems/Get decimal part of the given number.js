/* Get decimal part of the given number
Write a function that returns only the decimal part of the given number.

You only have to handle valid numbers, not Infinity, NaN, or similar. 
Always return a positive decimal part.

Examples
getDecimal(2.4)  === 0.4
getDecimal(-0.2) === 0.2
*/

const getDecimal = n => n % 1 ? +n.toString().replace(/.+\./, '0.') : 0;

console.log(getDecimal(10)) // 0
console.log(getDecimal(-1.2)) // 0.2
console.log(getDecimal(4.5)) // 0.5