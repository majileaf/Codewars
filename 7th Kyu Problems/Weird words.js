/* Weird words
Change every letter in a given string to the next letter in the alphabet. 
The function takes a single parameter s (string).

Notes:
Spaces and special characters should remain the same.
Capital letters should transfer in the same way but remain capitilized.

Examples
"Hello"               -->  "Ifmmp"
"What is your name?"  -->  "Xibu jt zpvs obnf?"
"zoo"                 -->  "app"
"zzZAaa"              -->  "aaABbb"
*/

const getLetter = str => /[A-Z]/.test(str) ? String.fromCharCode((str.charCodeAt() - 65 + 1) % 26 + 65) : String.fromCharCode((str.charCodeAt() - 97 + 1) % 26 + 97);
const nextLetter = str => str.replace(/[a-z]/gi, char => getLetter(char));

console.log(nextLetter("My Name Is Zoo")) // "Nz Obnf Jt App"
console.log(nextLetter("What is your name")) // "Xibu jt zpvs obnf
console.log(nextLetter("zOo")) // "aPp
console.log(nextLetter("Hello")) // "Ifmmp"
console.log(nextLetter("zzZAaa" )) // "aaABbb"