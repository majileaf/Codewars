/* Convert Integer to Binary
Convert integers to binary as simple as that. You would be given an integer as a argument and you have to return 
its binary form. To get an idea about how to convert a decimal number into a binary number, visit here.

Notes: negative numbers should be handled as two's complement; assume all numbers are integers stored using 
4 bytes (or 32 bits) in any language.

Your output should ignore leading 0s.

Examples (input --> output):
3  --> "11"
*/

const toBinary = n => (n >>> 0).toString(2);

console.log(toBinary(2)) // "10"
console.log(toBinary(3)) // "11"
console.log(toBinary(-3)) // "11111111111111111111111111111101"
console.log(toBinary(4)) // "100"
console.log(toBinary(5)) // "101"

console.log(toBinary(-896106)) // "11111111111100100101001110010110"
console.log(toBinary(-364588)) // "11111111111110100110111111010100"
console.log(toBinary(-736001)) // "11111111111101001100010011111111"