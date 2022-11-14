/* Least Larger
Given an array of numbers and an index, return either the index of 
the smallest number that is larger than the element at the given index, 
or -1 if there is no such index ( or, where applicable, Nothing or a
similarly empty value ).

Notes
Multiple correct answers may be possible. In this case, return any one of them.
The given index will be inside the given array.
The given array will, therefore, never be empty.

Example
leastLarger( [4, 1, 3, 5, 6], 0 )  =>  3
leastLarger( [4, 1, 3, 5, 6], 4 )  => -1
*/

// initial solution:
// const leastLarger = (a, i) => {
//     const min = Math.min(...a.filter(e => e > a[i]));
//     return a.indexOf(min);
// }

const leastLarger = (a, i) => {
  const min = a.reduce(([min, idx], n, iArr) => (n > a[i] && n < min && iArr !== i ? [n, iArr] : [min, idx]), [Infinity, -1]);
  return min[1] === -1 ? -1 : min[1];
}

console.log(leastLarger( [4, 1, 3, 5, 6], 0)) // 3 
console.log(leastLarger( [4, 1, 3, 5, 6], 4)) // -1 
console.log(leastLarger( [1, 3, 5, 2, 4], 0)) // 3 