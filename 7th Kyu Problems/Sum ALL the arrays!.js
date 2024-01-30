/* Sum ALL the arrays!
You are given an array of values.
Sum every number value in the array, and any nested arrays (to any depth).
Ignore all other types of values.
*/

const arraySum = arr => arr.reduce((sum, n) => sum + (Array.isArray(n) ? arraySum(n) : n === Number(n) ? n : 0), 0);

// alternatively: 
// const arraySum = arr => {
//     let count = 0;
//     for (const n of arr) {
//         if (n === Number(n)) count += n;
//         if (typeof n === 'object') count += arraySum(n);
//     }
//     return count;
// }

console.log(arraySum([1, 2])) // 3
console.log(arraySum([1, 2, 3])) // 6
console.log(arraySum([1, 2, [1, 2]])) // 6