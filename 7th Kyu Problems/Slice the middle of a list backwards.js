/* Slice the middle of a list backwards
Write a function that takes a list of at least four elements as an argument and 
returns a list of the middle two or three elements in reverse order.
*/

const reverseMiddle = array => array.slice(array.length / 2 - 1, Math.ceil(array.length / 2) + 1).reverse();

console.log(reverseMiddle([1, 2, 3, 4])) // [3, 2]
console.log(reverseMiddle([1, 2, 3, 4, 5])) // [4, 3, 2]
console.log(reverseMiddle([1, 2, 3, 4, 5, 6])) // [4, 3]
console.log(reverseMiddle([1, 2, 3, 4, 5, 6, 7])) // [5, 4, 3]