/* Too Big To Sum?
JavaScript numbers have only enough storage space to represent 53 bit sized integers. 
This means any integer smaller than -2^53 and any integer larger than 2^53 might be rounded incorrectly. 

For example:
9007199254740993 === 9007199254740992 //true

Your task is to create a function which will return the sum of two given integers only 
when you are certain that the sum is correct. So, as long as the integers and their sum 
are never larger than 53 bits in magnitude, you must return the sum of the two given integers.

Anytime an integer with a magnitude larger than 53 bits is used your function must return false.

a and b will always be integers, but they may be larger than 53 bits. 
*/

const certainSum = (a, b) => Number.isSafeInteger(a) && Number.isSafeInteger(b) && Number.isSafeInteger(a + b) ? a + b : false;

console.log(certainSum(2, 2)) // 4
console.log(certainSum(22, -3)) // 19
console.log(certainSum(9007199254740993, -999)) // false
console.log(certainSum(-9007199254740900, -999)) // false