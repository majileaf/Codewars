/* [JS] Parse integers in array
A colleague asked if you can help him fix his function. 
It seems it doesn't always parse Integers correctly.

Examples:
parseNumbers(['10']) // should return [10]
parseNumbers(['-1','0','1']) // should return [-1,0,1]
*/

/**
 * Function converts array of string to array of integers.
 * @param  {Array} of numbers in form of string
 * @return {Array} of integer numbers 
 */
// var parseNumbers = function(intStrs) {
//   return intStrs.map(parseInt);
// }

const parseNumbers = intStrs => intStrs.map(e => parseInt(e));

console.log(parseNumbers([])) // []
console.log(parseNumbers(['13'])) // [13]
console.log(parseNumbers(['2.48'])) // [2]