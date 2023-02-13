/* Sum of array singles
In this Kata, you will be given an array of numbers in which two numbers occur once 
and the rest occur only twice. Your task will be to return the sum of the numbers 
that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, 
and their sum is 15. Every other number occurs twice.
*/

// initial solution:
// const repeats = arr => {
//     return arr.reduce((sum, n) => sum + (arr.indexOf(n) === arr.lastIndexOf(n) ? n : 0), 0)
// }

const repeats = arr => {
    const count = arr.reduce((sum, n) => (sum[n] = (sum[n] || 0) + 1, sum), {});
    return Object.entries(count).reduce((sum, [key, value]) => sum + (value === 1 ? Number(key) : 0), 0);
}

console.log(repeats([4,5,7,5,4,8])) // 15
console.log(repeats([9, 10, 19, 13, 19, 13])) // 19
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11])) // 12
console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13])) // 22
console.log(repeats([5, 10, 19, 13, 10, 13])) // 24