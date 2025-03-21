/* Case Reversal of Consecutive Duplicates
The aim of this Kata is to write a function which will reverse the case of all consecutive duplicate letters in a string. 
That is, any letters that occur one after the other and are identical.

If the duplicate letters are lowercase then they must be set to uppercase, and if they are uppercase then they need to be 
changed to lowercase.

Examples:
"puzzles" --> "puZZles"
"massive" --> "maSSive"
"LITTLE"  --> "LIttLE"
"shhh"    --> "sHHH"

Arguments passed will include only alphabetical letters A–Z or a–z.
*/

const reverseCase = string => string.replace(/(\w)\1+/g, char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase());

console.log(reverseCase('hello world')) // 'heLLo world'
console.log(reverseCase('HELLO WORLD')) // 'HEllO WORLD'
console.log(reverseCase('HeLlo World')) // 'HeLlo World'
console.log(reverseCase('WWW')) // 'www'