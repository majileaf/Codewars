/* Simple Fun #51: Array Previous Less
Task
Given array of integers, for each position i, search among the previous positions for the last (from the left) position 
that contains a smaller value. Store this value at position i in the answer. 
If no such value can be found, store -1 instead.

Example
For items = [3, 5, 2, 4, 5], the output should be [-1, 3, -1, 2, 4].

Input/Output
    [input] integer array arr
    Non-empty array of positive integers.
    Constraints: 3 ≤ arr.length ≤ 1000, 1 ≤ arr[i] ≤ 1000.

    [output] an integer array
    Array containing answer values computed as described above.

*/

const arrayPreviousLess  = arr => arr.map((e, i) => arr.slice(0, i).reverse().find(f => f < e) || -1);

console.log(arrayPreviousLess([3, 5, 2, 4, 5])) // [-1, 3, -1, 2, 4]
console.log(arrayPreviousLess([2, 2, 1, 3, 4, 5, 5, 3])) // [-1, -1, -1, 1, 3, 4, 4, 1]
console.log(arrayPreviousLess([3, 2, 1])) // [-1, -1, -1]