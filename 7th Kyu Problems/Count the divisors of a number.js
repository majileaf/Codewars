/*
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)
4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
*/

// brute force solution:
// const getDivisorsCnt = n => {
//     let counter = 0;

//     for (let i = 1; i <= n; i++) {
//         if (n % i === 0) counter++;
//     }
//     return counter;
// }

const getDivisorsCnt = n => {
    let counter = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            (n / i === i) ? counter += 1 : counter += 2;
        }
    }
    return counter;
}

console.log(getDivisorsCnt(1)) // 1
console.log(getDivisorsCnt(10)) // 4
console.log(getDivisorsCnt(11)) // 2
console.log(getDivisorsCnt(54)) // 8