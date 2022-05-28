/*
Complete the method which accepts an array of integers, 
and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise

You can assume the array will always be valid, and there will always 
be one correct answer.
*/

// initial solution:
// const isSortedAndHow = array => 
//     array == array.slice().sort((a, b) => a - b).toString() ? 'yes, ascending' : 
//     array == array.slice().sort((a, b) => b - a).toString() ? 'yes, descending' 
//     : 'no';

const isSortedAndHow = array => 
    array.every((e, i) => i === array.length - 1 || e <= array[i + 1]) ? 'yes, ascending' : 
    array.every((e, i) => i === array.length - 1 || e >= array[i + 1])  ? 'yes, descending' 
    : 'no';

console.log(isSortedAndHow([1, 2])) // 'yes, ascending'
console.log(isSortedAndHow([15, 7, 3, -8])) // 'yes, descending'
console.log(isSortedAndHow([4, 2, 30])) // 'no'