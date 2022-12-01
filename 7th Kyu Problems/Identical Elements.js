/* Identical Elements
Given two arrays of integers m and n, test if they contain at least 
one identical element. Return true if they do; false if not.

Your code must handle any value within the range of a 32-bit integer, 
and must be capable of handling either array being empty (which is a 
false result, as there are no duplicated elements).
*/

const duplicateElements = (m, n) => m.some(e => n.indexOf(e) !== -1);

console.log(duplicateElements([], [])) // false
console.log(duplicateElements([1, 2, 3, 4, 5], [])) // false
console.log(duplicateElements([], [1, 6, 7, 8, 9])) // false
console.log(duplicateElements([1, 2, 3, 4, 5], [1, 6, 7, 8, 9])) // true
console.log(duplicateElements([9, 8, 7], [8, 1, 3])) // true
console.log(duplicateElements([ 9, 8, 7, 9 ], [ 6, 5, 4 ])) // false