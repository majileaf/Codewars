/* Set Reducer
Intro
These arrays are too long! Let's reduce them!

Description
Write a function that takes in an array of integers from 0-9, and returns a new array:

Numbers with no identical numbers preceding or following it returns a 1: 2, 4, 9  => 1, 1, 1
Sequential groups of identical numbers return their count: 6, 6, 6, 6 => 4
Example

[0, 4, 6, 8, 8, 8, 5, 5, 7] => [1, 1, 1, 3, 2, 1]

Your function should then repeat the process on the resulting array, and on the resulting array of that, until it returns a single integer:

[0, 4, 6, 8, 8, 8, 5, 5, 7] =>  [1, 1, 1, 3, 2, 1] => [3, 1, 1, 1] => [1, 3] => [1, 1] => [2]

When your function has reduced the array to a single integer following these rules, it should return that integer.

[2] => 2

Rules and assertions
All test arrays will be 2+ in length
All integers in the test arrays will be positive numbers from 0 - 9
You should return an integer, not an array with 1 element
Visual example https://i.ibb.co/z5D1Mxm/image.png
*/

function setReducer(input) {
  // code here
}

console.log(setReducer([0, 4, 6, 8, 8, 8, 5, 5, 7])) // 2
console.log(setReducer([9, 4, 1, 1, 1, 2, 3, 9, 4, 6, 2])) // 3
console.log(setReducer([1, 7, 0, 6, 1, 9, 0, 7, 1, 6, 0, 9, 0])) // 13
console.log(setReducer([0, 2, 7, 0, 0, 6, 2, 1, 2, 2, 3, 4])) // 5
console.log(setReducer([9, 6, 3, 3, 3, 6, 7, 5, 2, 4, 1, 6, 9])) // 3
console.log(setReducer([5, 8, 1, 0, 5, 0, 6, 5, 8, 4, 4, 9, 7])) // 3
console.log(setReducer([5, 7, 7, 8, 7, 8, 6, 3, 5, 9, 0, 9, 1, 1])) // 2
console.log(setReducer([7, 9, 7, 3, 3, 5, 3, 4, 9, 4, 3])) // 3
console.log(setReducer([6, 0, 5, 9, 5, 0, 0, 2, 5, 0])) // 3