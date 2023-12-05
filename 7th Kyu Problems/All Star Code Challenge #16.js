/* All Star Code Challenge #16

Create a function called noRepeat() that takes a string argument and returns a single letter string 
of the first not repeated character in the entire string.

noRepeat("aabbccdde") // => "e"
noRepeat("wxyz") // => "w"
noRepeat("testing") // => "e"

Note: ONLY letters from the english alphabet will be used as input There will ALWAYS be at least 
one non-repeating letter in the input string
*/

const noRepeat = str => [...str].find(e => str.indexOf(e) === str.lastIndexOf(e));

console.log(noRepeat("aabbccdde")) // "e"
console.log(noRepeat("wxyz")) // "w"
console.log(noRepeat("testing")) //  "e"