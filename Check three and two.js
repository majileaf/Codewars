/* Check three and two
Given an array with exactly 5 strings "a", "b" or "c" 
(chars in Java, characters in Fortran), check if the array 
contains three and two of the same values.

Examples
["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
["a", "a", "a", "a", "a"] ==> false // 5x "a"
*/

const checkThreeAndTwo = array => {
  const count = array.reduce((sum, n) => (sum[n] = (sum[n] || 0) + 1, sum), {});
  const countValues = Object.values(count);
  return countValues.length === 2 && countValues.includes(3);
}

console.log(checkThreeAndTwo(["a", "a", "a", "b", "b"])) // true 
console.log(checkThreeAndTwo(["a", "c", "a", "c", "b"])) // false 
console.log(checkThreeAndTwo(["a", "a", "a", "a", "a"])) // false 