/* Difference of 2
The objective is to return all pairs of integers from a given array of integers that have a difference of 2.

The result array should be sorted in ascending order of values.

Assume there are no duplicate integers in the array. The order of the integers in the input array should not matter.

Examples
[1, 2, 3, 4]  should return [[1, 3], [2, 4]]
[4, 1, 2, 3]  should also return [[1, 3], [2, 4]]
[1, 23, 3, 4, 7] should return [[1, 3]]
[4, 3, 1, 5, 6] should return [[1, 3], [3, 5], [4, 6]]
*/

const twosDifference = input => {
    const count = input.reduce((sum, n) => (sum[n] = true, sum), {});
    const arr = [];

    for (let i = 0; i < input.length; i++) {
        if (count[input[i] + 2]) arr.push([input[i], input[i] + 2]);
    }
    return arr.sort((a, b) => a[0] - b[0]);
}

console.log(twosDifference([1, 2, 3, 4])) // [[1, 3], [2, 4]]
console.log(twosDifference([1, 3, 4, 6])) // [[1, 3], [4, 6]]
console.log(twosDifference([4, 1, 2, 3])) // [[1, 3], [2, 4]]
console.log(twosDifference([1, 23, 3, 4, 7])) // [1, 3]]
console.log(twosDifference([4, 3, 1, 5, 6])) // [1, 3], [3, 5], [4, 6]]