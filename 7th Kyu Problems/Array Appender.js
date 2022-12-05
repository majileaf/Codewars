/* Array Appender
Write a function that appends the items from sequence 2 onto sequence 1,
returning the newly formed sequence. Your function should also be able 
to handle nested sequences.

All inputs will be arrays/nested arrays.

For example:
['a','b','c'], [1,2,3]     --> ['a','b','c',1,2,3]
[['x','x'],'B'], ['c','D'] --> [['x','x'],'B','c','D']
*/

const appendArrays = (arr1, arr2) => arr1.concat(arr2);

console.log(appendArrays([1,2], [2,4])) // [1,2,2,4]
console.log(appendArrays([1,2],[3,4])) // [1,2,3,4]
console.log(appendArrays(['this'],['that'])) // ['this','that']
console.log(appendArrays(['a','B'],['c','D'])) // ['a','B','c','D']
console.log(appendArrays([1,2], [1])) // [1,2,1]