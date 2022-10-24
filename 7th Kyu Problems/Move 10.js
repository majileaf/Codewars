/* Move 10
Move every letter in the provided string forward 10 letters through the alphabet.

If it goes past 'z', start again at 'a'.

Input will be a string with length > 0.
*/

const moveTen = s => [...s].map(e => String.fromCharCode(((e.charCodeAt() + 10 - 97) % 26) + 97)).join('');

console.log(moveTen("testcase")) // "docdmkco"
console.log(moveTen("codewars")) // "mynogkbc"
console.log(moveTen("exampletesthere")) // "ohkwzvodocdrobo"