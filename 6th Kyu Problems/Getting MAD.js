/* Getting MAD
Getting the Minimum Absolute Difference

Task
Given an array of integers with at least 2 elements: a1, a2, a3, a4, ... aN
The absolute difference between two array elements ai and aj, where i != j, is the absolute value of ai - aj.
Return the minimum absolute difference (MAD) between any two elements in the array.

Example
For [-10, 0, -3, 1]
the MAD is 1.

Explanation:
| -10 -    0  | = 10
| -10 -  (-3) | =  7
| -10 -    1  | = 11
|   0 - (-10) | = 10
|   0 -  (-3) | =  3
|   0 -    1  | =  1
|  -3 - (-10) | =  7
|  -3 -    0  | =  3
|  -3 -    1  | =  4
|   1 - (-10) | = 11
|   1 -    0  | =  1
|   1 -  (-3) | =  4

The minimum value is 1 ( both | 0 - 1 | and | 1 - 0 | ).

Note
Note that the same value can appear more than once in the array. In that case, the MAD will be 0.
*/

const gettingMad = array => {
    const arr = [];
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            arr.push(Math.abs(array[i] - array[j]));
        }
    }
    return Math.min(...arr);
}

// alternatively:
// const gettingMad = array => {
//     let min = Infinity;
//     for (let i = 0; i < array.length - 1; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             min = Math.min(min, Math.abs(array[i] - array[j]));
//         }
//     }
//     return min;
// }

console.log(gettingMad([-10, 0, -3, 1])) // 1
console.log(gettingMad([0, 0, 0, 0])) // 0
console.log(gettingMad([-570, 542])) // 1112
console.log(gettingMad([-69, -808, 828, 57])) // 126