/*
Check to see if a string has the same amount of 'x's and 'o's. 
The method must return a boolean and be case insensitive. 
The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

const XO = str => !str.toLowerCase().split('').reduce((sum, n) => sum + (n === 'x' ? 1 : n === 'o' ? -1 : 0), 0);

// alternatively:
// const XO = str => {
//     str = str.toLowerCase();
//     return str.split('x').length === str.split('o').length;
// }

console.log(XO('xo')) // true
console.log(XO("xxOo")) // true
console.log(XO("xxxm")) // false
console.log(XO("Oo")) // false
console.log(XO("ooom")) // false