/* Count the Combinations
Consider a sequence of integers xs, and a target integer n. 
Your task is to write a function which counts how many 
combinations of indexes of xs meet two rules:

The size of the combination must be 1 less than the size of xs
The sum of elements corresponding to the indexes must equal n

For example:
xs = [5, 0, 0, 2], n = 7
All combinations of indexes (of size 3)
{0, 1, 2} -> 5 + 0 + 0 = 5
{0, 1, 3} -> 5 + 0 + 2 = 7
{0, 2, 3} -> 5 + 0 + 2 = 7
{1, 2, 3} -> 0 + 0 + 2 = 2
Only 2 combinations match the target -> Answer = 2
*/

const numCombo = (arr, num) => [[0, 1, 2, 3], [0, 1, 2, 4], [0, 1, 3, 4], [0, 2, 3, 4], [1, 2, 3, 4]].filter(e => e.reduce((sum, n) => sum + arr[n], 0) === num).length;

// alternatively:
// const numCombo = (arr, n) => {
//     const sum = arr => arr.reduce((sum, n) => sum + n, 0);
//     return arr.filter(e => (sum - e) === n).length;
// }

console.log(numCombo([2, 0, 0, 0, 1], 2)) // 1
console.log(numCombo([2, 0, 0, 0, 1], 1)) // 1
console.log(numCombo([2, 0, 0, 0, 1], 3)) // 3
console.log(numCombo([0, 0, 0, 0, 0], 0)) // 5
console.log(numCombo([0, 0, 0, 0, 1], 1)) // 4
console.log(numCombo([0, 0, 0, 0, 1], 2)) // 0