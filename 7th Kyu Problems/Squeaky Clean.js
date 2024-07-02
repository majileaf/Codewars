/* Squeaky Clean
Write a solution to cleanup arrays. This can exist entirely in the squeakyClean function or contain multiple helper functions.
Your squeakyClean function should accept an input array of values and return a new array with all empty strings, 0, null and 
undefined removed.

Example:
var originalArray = ['click1','click2',null,'','','submitForm'];
the solution you write should return this:

var cleanedArray = ['click1', 'click2','submitForm'] 
*/

// initial solution:
// const squeakyClean = arr => arr.filter(e => e);

// alternative to include false: 
const squeakyClean = arr => arr.filter(e => e !== '' && e !== 0 && e !== null & e !== undefined);

console.log(squeakyClean(['click1','click2',null,'','','submitForm'])) // ['click1', 'click2','submitForm']
console.log(squeakyClean([1,2,3,-1,1.1])) // [1,2,3,-1,1.1]
console.log(squeakyClean(['hello', '14'])) // ['hello', '14']