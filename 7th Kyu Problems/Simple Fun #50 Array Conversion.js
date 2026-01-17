/* Simple Fun #50: Array Conversion
Task
Given an array of 2k integers (for some integer k), perform the following operations until the array contains only one element:
On the 1st, 3rd, 5th, etc. 
iterations (1-based) replace each pair of consecutive elements with their sum;
On the 2nd, 4th, 6th, etc. 
iterations replace each pair of consecutive elements with their product.

After the algorithm has finished, there will be a single element left in the array. Return that element.

Example
For inputArray = [1, 2, 3, 4, 5, 6, 7, 8], the output should be 186.
We have [1, 2, 3, 4, 5, 6, 7, 8] -> [3, 7, 11, 15] -> [21, 165] -> [186], so the answer is 186.

Input/Output
    [input] integer array arr
    Constraints: 21 ≤ arr.length ≤ 25, -9 ≤ arr[i] ≤ 99.
    [output] an integer
*/

const sumArr = array => [...Array(array.length / 2)].map((_, i) => array[i * 2] + array[i * 2 + 1]);
const multArr = array => [...Array(array.length / 2)].map((_, i) => array[i * 2] * array[i * 2 + 1]);
const arrayConversion = arr => {
    let res = arr.slice();
    for (let i = 1; i <= Math.log2(arr.length); i++) {
        i % 2 ? res = sumArr(res) : res = multArr(res);
    }
    return res[0];
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8])) // 186
console.log(arrayConversion([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])) // 64
console.log(arrayConversion([3, 3, 5, 5])) // 60