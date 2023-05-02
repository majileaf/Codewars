/* Exclamation marks series #7: Remove words from the sentence if it contains one exclamation mark
Remove words from the sentence if they contain exactly one exclamation mark. 
Words are separated by a single space, without leading/trailing spaces.
*/

// initial solution: 
// const remove = string => string
//     .split(' ')
//     .filter(e => !e.includes('!') || e.indexOf('!') !== e.lastIndexOf('!'))
//     .join(' ');

const remove4 = string => string.split(' ').filter(e => e.split('!').length !== 2).join(' ');

console.log(remove("Hi!")) // ""
console.log(remove("Hi! Hi!")) // ""
console.log(remove("Hi! Hi! Hi!")) // ""
console.log(remove("Hi Hi! Hi!")) // "Hi"
console.log(remove("Hi! !Hi Hi!")) // ""
console.log(remove("Hi! Hi!! Hi!")) // "Hi!!"
console.log(remove("Hi! !Hi! Hi!")) // "!Hi!"