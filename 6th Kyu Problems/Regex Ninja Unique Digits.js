/* Regex Ninja: Unique Digits
Your task is to write a regular expression that will match only numbers whose digits are all unique, 
i.e. they are not repeated anywhere within the number.

The input will be a positive integer, given as a string. You should assign your expression to the regex variable, 
which will be tested using RegExp.prototype.test(). The test should return true if all digits of the number are unique, 
and false otherwise.

Examples:
regex.test('1234')
// --> true

regex.test('1232')
// --> false
// because digit 2 is repeated
*/

const regex = /^(?!\d*(?:(\d)\d*\1))\d*$/;

console.log(regex.test('1')) // true
console.log(regex.test('1234')) // true
console.log(regex.test('1232')) // false
console.log(regex.test('10284')) // true
console.log(regex.test('79222')) // false
console.log(regex.test('6924015')) // true
console.log(regex.test('6060606')) // false
console.log(regex.test('2596108347')) // true
console.log(regex.test('25961088347')) // false
console.log(regex.test('25961508347')) // false