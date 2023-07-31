/* Lowercase strings in array
Create a function to lowercase all strings in an array. 
Non-string items should remain unchanged.

Example
arrayLowerCase(['Red', 'Green']) == ['red', 'green']
arrayLowerCase([1, 'Green']) == [1, 'green']
*/

const arrayLowerCase = arr => arr.map(e => typeof e === 'string' ? e.toLowerCase() : e);

// alternatively:
// const arrayLowerCase = arr => arr.map(val => val.toLowerCase ? val.toLowerCase() : val); 

console.log(arrayLowerCase(['Red', 'Green'])) // ['red', 'green']
console.log(arrayLowerCase([1, 'Green'])) // [1, 'green']