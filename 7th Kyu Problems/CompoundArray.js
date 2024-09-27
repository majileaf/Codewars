/* CompoundArray
You have to create a method "compoundArray" which should take as input two int arrays of different length and 
return one int array with numbers of both arrays shuffled one by one.

Input - {1,2,3,4,5,6} and {9,8,7,6} 
Output - {1,9,2,8,3,7,4,6,5,6}
*/

const compoundArray = (a, b) => {
  const len = a.length < b.length ? a.length : b.length;
  const fill = a.length < b.length ? b.slice(len) : a.slice(len);
  const arr = [];

  for (let i = 0; i < len; i++) {
      arr.push(a[i], b[i]);
  }
  return [...arr, ...fill];
}

console.log(compoundArray([11, 12], [21, 22, 23, 24])) // [11, 21, 12, 22, 23, 24]
console.log(compoundArray([2147483647,2147483646,2147483645,2147483644,2147483643], [9])) // [2147483647,9,2147483646,2147483645,2147483644,2147483643]
console.log(compoundArray([214,215,216,217,218], [])) // [214,215,216,217,218]
console.log(compoundArray([], [314,315,316,317,318])) // [314,315,316,317,318]