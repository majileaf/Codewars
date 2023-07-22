/* Multiply the strings in the array
You received an array with two strings. 
Create a function that will return their product as a string. E.g.

arrMultiply(['9','6']) should return '54'
*/

const arrMultiply = ([a, b]) => String(a * b);

console.log(arrMultiply(['4','5'])) // "20"
console.log(arrMultiply(['2','-5'])) // "-10"
console.log(arrMultiply(['9','0'])) // "0"