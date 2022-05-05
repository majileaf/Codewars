/*
Write a function to get the first elements of a sequence. 
Passing a parameter n (default=1) will return the first 
n elements of the sequence.

If n == 0 return an empty sequence []

Examples
var arr = ['a', 'b', 'c', 'd', 'e'];
first(arr) //=> ['a'];
first(arr, 2) //=> ['a', 'b']
first(arr, 3) //=> ['a', 'b', 'c'];
first(arr, 0) //=> [];
*/

// inital solution
// const first = (arr, n) => n !== 0 ? arr.slice(0, n || 1) : [];

const first = (arr, n = 1) => arr.slice(0, n);

var arr = ['a', 'b', 'c', 'd', 'e'];
console.log(first(arr)) // ['a']
console.log(first(arr, 2)) // ['a', 'b']
console.log(first(arr, 3)) //=> ['a', 'b', 'c'];
console.log(first(arr, 0)) //=> [];