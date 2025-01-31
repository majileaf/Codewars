/*
Your task is to sum the differences between consecutive pairs 
in the array in descending order.

For example:
sumOfDifferences([2, 1, 10])
Returns 9

Descending order: [10, 2, 1]
Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element 
the result should be 0 (Nothing in Haskell).
*/

// initital solution:
// const sumOfDifferences = arr => {
//     if (arr.length < 2) return 0;
//     const arrReverse = arr.slice().sort((a, b) => b - a);
//     let sum = 0;

//     for (let i = 0; i < arrReverse.length - 1; i++) {
//         sum += arrReverse[i] - arrReverse[i + 1];
//     }
//     return sum;
// }

// math version:
const sumOfDifferences = arr => arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;

console.log(sumOfDifferences([1, 2, 10])) // 9
console.log(sumOfDifferences([-3, -2, -1])) // 2