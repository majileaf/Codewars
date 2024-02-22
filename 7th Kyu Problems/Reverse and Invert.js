/* Reverse and Invert
Reverse and invert all integer values in a given list.

reverse_invert([1,12,'a',3.4,87,99.9,-42,50,5.6]) = [-1,-21,-78,24,-5]
Remove all types other than integer.
*/

const convertNum = n => -Math.sign(n) * String(Math.abs(n)).split('').reverse().join('');
const reverseInvert = array => array.reduce((sum, n) => Number.isInteger(n) ? [...sum, convertNum(n)] : sum, []);

console.log(reverseInvert([1,2,3,4,5])) // [-1,-2,-3,-4,-5]
console.log(reverseInvert([-10])) // [1]
console.log(reverseInvert([-9,-18,99])) // [9,81,-99]
console.log(reverseInvert([1,12,'a',3.4,87,99.9,-42,50,5.6])) // [-1,-21,-78,24,-5]
console.log(reverseInvert([])) // []