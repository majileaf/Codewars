/* Rotate Array (JS)
Create a function named "rotate" that takes an array and returns a new one with the elements inside rotated n spaces.

If n is greater than 0 it should rotate the array to the right. If n is less than 0 it should rotate the array to the left. 
If n is 0, then it should return the array unchanged.

Example:
var data = [1, 2, 3, 4, 5];

rotate(data, 1) // => [5, 1, 2, 3, 4]
rotate(data, 2) // => [4, 5, 1, 2, 3]
rotate(data, 3) // => [3, 4, 5, 1, 2]
rotate(data, 4) // => [2, 3, 4, 5, 1]
rotate(data, 5) // => [1, 2, 3, 4, 5]

rotate(data, 0) // => [1, 2, 3, 4, 5]

rotate(data, -1) // => [2, 3, 4, 5, 1]
rotate(data, -2) // => [3, 4, 5, 1, 2]
rotate(data, -3) // => [4, 5, 1, 2, 3]
rotate(data, -4) // => [5, 1, 2, 3, 4]
rotate(data, -5) // => [1, 2, 3, 4, 5]

Furthermore the method should take ANY array of objects and perform this operation on them:

rotate(['a', 'b', 'c'], 1)     // => ['c', 'a', 'b']
rotate([1.0, 2.0, 3.0], 1)     // => [3.0, 1.0, 2.0]
rotate([true, true, false], 1) // => [false, true, true]

Finally the rotation shouldn't be limited by the indices available in the array. 
Meaning that if we exceed the indices of the array it keeps rotating.

Example:
var data = [1, 2, 3, 4, 5]

rotate(data, 7)     // => [4, 5, 1, 2, 3]
rotate(data, 11)    // => [5, 1, 2, 3, 4]
rotate(data, 12478) // => [3, 4, 5, 1, 2]
*/

const rotate = (array, n) => array.map((_, i) => array[(i + array.length - n % array.length) % array.length]);

let data = [1, 2, 3, 4, 5];

console.log(rotate(data, 1)) // [5, 1, 2, 3, 4]
console.log(rotate(data, 2)) // [4, 5, 1, 2, 3]
console.log(rotate(data, 3)) // [3, 4, 5, 1, 2]
console.log(rotate(data, 4)) // [2, 3, 4, 5, 1]
console.log(rotate(data, 5)) // [1, 2, 3, 4, 5]

console.log(rotate(data, 0)) // [1, 2, 3, 4, 5]

console.log(rotate(data, -1)) // [2, 3, 4, 5, 1]
console.log(rotate(data, -2)) // [3, 4, 5, 1, 2]
console.log(rotate(data, -3)) // [4, 5, 1, 2, 3]
console.log(rotate(data, -4)) // [5, 1, 2, 3, 4]
console.log(rotate(data, -5)) // [1, 2, 3, 4, 5]

console.log(rotate(['a', 'b', 'c'], 1)) // ['c', 'a', 'b']
console.log(rotate([1.0, 2.0, 3.0], 1)) // [3.0, 1.0, 2.0]
console.log(rotate([true, true, false], 1)) // [false, true, true]

console.log(rotate(data, 7)) // [4, 5, 1, 2, 3]
console.log(rotate(data, 11)) // [5, 1, 2, 3, 4]
console.log(rotate(data, 12478)) // [3, 4, 5, 1, 2]