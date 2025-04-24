/* zero-balanced Array
An array is called zero-balanced if its elements sum to 0 and for each element, 
there exists another element that is the negative of such. 

For example,
[1, -1, 2, -2] — zero-balanced, sum of elements is 0 + each element has its own negative;
[0, 1, -1] — zero-balanced, 0 is the negative of itself (0 == -0);
[3] — not zero-balanced; sum != 0;
[3, -2, -1] — not zero-balanced, sum == 0, but the array has 3 but not -its negative, -3

Write a function that returns true if its argument is zero-balanced array, else return false.

Note: an empty array will not sum to 0 since there are no elements in it, therefore, 
it should be treated as not zero-balanced.
*/

const ìsZeroBalanced = n => {
  const sorted = n.slice().sort((a, b) => a - b);
  if (!sorted.length || sorted.length % 2 !== 0 && sorted[Math.floor(sorted.length / 2)] !== 0) return false;

  for (let i = 0; i < sorted.length / 2; i++) {
      if (sorted[i] + sorted[sorted.length - 1 - i] !== 0) return false;
  }
  return true;
}

console.log(ìsZeroBalanced([3])) // false
console.log(ìsZeroBalanced([-3])) // false
console.log(ìsZeroBalanced([])) // false
console.log(ìsZeroBalanced([3, -2, -1])) // false
console.log(ìsZeroBalanced([1, 1, -2])) // false
console.log(ìsZeroBalanced([-1, 1, -2, 2, -2, -2, -4, 4])) // false

console.log(ìsZeroBalanced([1, -1, 2, -2])) // true
console.log(ìsZeroBalanced([0, 1, -1])) // true