/* String to integer conversion
JavaScript provides a built-in parseInt method.

It can be used like this:

parseInt("10") returns 10
parseInt("10 apples") also returns 10
We would like it to return "NaN" (as a string) for the second case because the input string 
is not a valid number.

You are asked to write a myParseInt method with the following rules:

It should make the conversion if the given string only contains a single integer value 
(and possibly spaces - including tabs, line feeds... - at both ends)
For all other strings (including the ones representing float values), it should return NaN
It should assume that all numbers are not signed and written in base 10
*/

// initial solution:
// const myParseInt = str => {
//     const number = /^(?=.*?[0-9])[0-9\s]+$/g;
//     return number.test(str) ? +str.match(number) : NaN;
// }

const myParseInt = str => /^(?=.*?[0-9])[0-9\s]+$/g.test(str) ? +str : NaN;

// alternatively:
// const myParseInt = str => /^\s*\d+\s*$/.test(str) ? +str : NaN;

console.log(myParseInt("1")) // 1
console.log(myParseInt("  1 ")) // 1
console.log(myParseInt("08")) // 8
console.log(myParseInt("5 friends")) // NaN
console.log(myParseInt("16.5")) // NaN