/* Closest to Zero
Simply find the closest value to zero from the list. Notice that there are negatives in the list.
List is always not empty and contains only integers. Return None if it is not possible to define 
only one of such values. And of course, we are expecting 0 as closest value to zero.

Examples:
[2, 4, -1, -3]  => -1
[5, 2, -2]      => None
[5, 2, 2]       => 2
[13, 0, -6]     => 0
*/

const closest = arr => {
  const sorted = [...new Set(arr.slice().sort((a, b) => Math.abs(a) - Math.abs(b)))];
  const [closestA, closestB] = [sorted[0], sorted[1]];
  return Math.abs(closestA) !== Math.abs(closestB) ? closestA : null;
}

console.log(closest([10, 3, 9, 1])) // 1
console.log(closest([2, 4, -1, -3])) // -1
console.log(closest([13, 0, -6])) // 0
console.log(closest([5, 1, -1, 2, -10])) // null
console.log(closest([5, 11, 11, 2, -1, 1])) // null