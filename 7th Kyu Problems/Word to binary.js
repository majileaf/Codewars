/* Word to binary
Write a function that takes a string and returns an array containing binary numbers equivalent to the ASCII codes 
of the characters of the string. The binary strings should be eight digits long.

Example: 'man' should return [ '01101101', '01100001', '01101110' ]
*/

const wordToBin = str => [...str].map(e => e.charCodeAt(0).toString(2).padStart(8, '0'));

console.log(wordToBin('man'), [ '01101101', '01100001', '01101110' ]) // [ '01101101', '01100001', '01101110' ] for `man` "
console.log(wordToBin('AB'), ['01000001', '01000010']) // ['01000001', '01000010'] for `AB`"
console.log(wordToBin('wecking'),[ '01110111', '01100101', '01100011', '01101011', '01101001', '01101110', '01100111' ]) // [ '01110111', '01100101', '01100011', '01101011', '01101001', '01101110', '01100111' ]  for `wecking`"
console.log(wordToBin('Ruby'),[ '01010010', '01110101', '01100010', '01111001' ]) // [ '01010010', '01110101', '01100010', '01111001' ]  for `Ruby`"
console.log(wordToBin('Yosemite'),[ '01011001', '01101111', '01110011', '01100101', '01101101', '01101001', '01110100', '01100101' ]) // [ '01011001', '01101111', '01110011', '01100101', '01101101', '01101001', '01110100', '01100101' ]  for `Yosemite`"