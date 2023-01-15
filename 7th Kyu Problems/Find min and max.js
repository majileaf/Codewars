/* Find min and max
Implement a function that returns the minimal and the maximal value 
of a list (in this order).
*/

const getMinMax = arr => [Math.min(...arr), Math.max(...arr)];

console.log(getMinMax([1])) // [1,1]
console.log(getMinMax([1,2])) // [1,2]
console.log(getMinMax([2,1])) // [1,2]