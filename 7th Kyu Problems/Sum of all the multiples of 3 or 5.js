/*
Your task is to write function findSum.

Upto and including n, this function will return the sum of all multiples of 3 and 5.

For example:
findSum(5) should return 8 (3 + 5)
findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)
*/

// initial solution:
// const findSum = n => {
//     const n3 = Math.floor((n - 3) / 3 + 1);
//     const n5 = Math.floor((n - 5) / 5 + 1);
//     const n15 = Math.floor((n - 15) / 15 + 1);
//     const sum3 = n3 * (2 * 3 + (n3 - 1) * 3) / 2;
//     const sum5 = n5 * (2 * 5 + (n5 - 1) * 5) / 2;
//     const sum15 = n15 * (2 * 15 + (n15 - 1) * 15) / 2;
//     return sum3 + sum5 - sum15;
// }

const sumOfMultiples = (n, step) => {
    const nTerms = Math.floor((n - step) / step + 1);
    return nTerms * (2 * step + (nTerms - 1) * step) / 2;
}

const findSum = n => {
    return sumOfMultiples(n, 3) + sumOfMultiples(n, 5) - sumOfMultiples(n, 15);
}

console.log(findSum(5)) // 8
console.log(findSum(10)) // 33