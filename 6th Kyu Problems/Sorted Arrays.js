/* Sorted Arrays
Given any number of arrays each sorted in ascending order, find the nth smallest number of all their elements.

All the arguments except the last will be arrays, the last argument is n.

nthSmallest([1,5], [2], [4,8,9], 4) // returns 5 because it's the 4th smallest value

Be mindful of performance.
*/

const nthSmallest = (...arr) => {
    const n = arr.pop();
    return arr.flat(Infinity).sort((a, b) => a - b)[n - 1];
}

// should work with one array
console.log(nthSmallest([[2, 4, 6, 8, 10, 12]], 5)) // 10

// should work with one array containing repeating numbers
console.log(nthSmallest([[2, 2, 2, 2, 2]], 3)) // 2

// should work with two arrays
console.log(nthSmallest([[2, 8, 12], [4, 6, 10]], 5)) // 10

// should work with three arrays
console.log(nthSmallest([[1, 5], [2], [4, 8, 9]], 4)) // 5

// should work with a bunch of arrays
console.log(nthSmallest([[1], [2], [3], [4], [5, 6, 7, 8], [9], [10]], 7)) // 7

console.log(nthSmallest([2,8,12], [4,6,10], 5)) // 10