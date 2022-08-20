/* Counting Array Elements
Write a function that takes an array and counts the number of 
each unique element present.

count(['james', 'james', 'john']) 
#=> { 'james': 2, 'john': 1}
*/

const count = array => array.reduce((sum, n) => (sum[n] = (sum[n] || 0) + 1, sum), {});

console.log(count(['james', 'james', 'john'])) // { 'james': 2, 'john': 1}
console.log(count(['a', 'a', 'b', 'b', 'b'])) // { 'a': 2, 'b': 3 })