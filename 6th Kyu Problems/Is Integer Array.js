/* Is Integer Array?
Write a function with the signature shown below:

function isIntArray(arr) {
  return true
}

returns true  / True if every element in an array is an integer or a float with no decimals.
returns true  / True if array is empty.
returns false / False for every other input.
*/

const isIntArray = arr => arr ? arr.every(e => Number.isInteger(e)) : false;

// alternatively:
// const isIntArray = arr => Array.isArray(arr) && arr.every(Number.isInteger);

console.log(isIntArray([])) // true
console.log(isIntArray([1, 2, 3, 4])) // true
console.log(isIntArray([1, 2, 3, NaN])) // false