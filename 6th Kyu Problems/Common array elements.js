/* Common array elements
Given three arrays of integers, return the sum of elements that are common in all three arrays.

For example:
common([1,2,3],[5,3,2],[7,3,2]) = 5 because 2 & 3 are common in all 3 arrays
common([1,2,2,3],[5,3,2,2],[7,3,2,2]) = 7 because 2,2 & 3 are common in the 3 arrays

More examples in the test cases.

Good luck!
*/

const countElements = arr => arr.reduce((sum, n) => (sum[n] = (sum[n] || 0) + 1, sum), {});
const common = (a, b, c) => {
    const countA = countElements(a);
    const countB = countElements(b);
    const countC = countElements(c);
    return Object.keys(countA).filter(e => countB[e] > 0 && countC[e] > 0).reduce((sum, n) => sum + n * Math.min(countA[n], countB[n], countC[n]), 0);
}

console.log(common([1,2,3],[5,3,2],[7,3,2])) // 5
console.log(common([1,2,2,3],[5,3,2,2],[7,3,2,2])) // 7