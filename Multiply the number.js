/* Multiply the number
Jack really likes his number five: the trick here is that you have to 
multiply each number by 5 raised to the number of digits of each numbers, 
so, for example:

multiply(3)==15 // 3 * 5¹
multiply(10)==250 // 10 * 5²
multiply(200)==25000 // 200 * 5³
multiply(0)==0 // 0 * 5¹
multiply(-3)==-15 // -3 * 5¹
*/

const multiply = number => number * 5 ** String(Math.abs(number)).length;

console.log(multiply(10)) // 250
console.log(multiply(5)) // 25
console.log(multiply(200)) // 25000
console.log(multiply(0)) // 0
console.log(multiply(-2)) // -10