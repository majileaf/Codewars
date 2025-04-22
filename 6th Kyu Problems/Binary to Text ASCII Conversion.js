/* Binary to Text (ASCII) Conversion
Write a function that takes in a binary string and returns the equivalent decoded text (the text is ASCII encoded).
Each 8 bits on the binary string represent 1 character on the ASCII table.
The input string will always be a valid binary string.
Characters can be in the range from "00000000" to "11111111" (inclusive)

Note: In the case of an empty binary string your function should return an empty string.
*/

const binaryToString = binary => binary ? String.fromCharCode(...binary.match(/.{8}/g).map(e => parseInt(e, 2))) : '';

console.log(binaryToString('01100001')) // 'a'
console.log(binaryToString('01001011010101000100100001011000010000100101100101000101')) // 'KTHXBYE'
console.log(binaryToString('00110001001100000011000100110001')) // '1011'
console.log(binaryToString('001111000011101000101001')) // '<:)'