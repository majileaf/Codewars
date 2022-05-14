/*
Your Job
Find the sum of all multiples of n below m

Keep in Mind
n and m are natural numbers (positive integers)
m is excluded from the multiples
Examples
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"
*/

// initial solution:
// const sumMul = (n, m) => {
//     if (n > m || n === 0 && m === 0) return 'INVALID';
    
//     let sum = 0;
//     for (let i = n; i <= m; i += n) {
//         sum += i;
//     }
//     return (m % n === 0 ? sum - m : sum); // ??? idk
// }

// math solution:
const sumMul = (n, m) => {
    if (n > m || n === 0 && m === 0) return 'INVALID';
    let sum = Math.floor((m / n)) * (2 * n + (Math.floor((m / n)) - 1) * n) / 2 
    return (m % n === 0 ? sum - m : sum); // kata has issues here
}

console.log(sumMul(0,0)) // "INVALID"
console.log(sumMul(2,9)) // 20
console.log(sumMul(4,-7)) // "INVALID"
console.log(sumMul(2, 9))   // ==> 2 + 4 + 6 + 8 = 20
console.log(sumMul(3, 13))  // ==> 3 + 6 + 9 + 12 = 30
console.log(sumMul(4, 123)) // ==> 4 + 8 + 12 + ... = 1860
console.log(sumMul(4, 120)) // ==> 4 + 8 + 12 + ... = 1860
console.log(sumMul(1, 100)) // 5050
console.log(sumMul(100, 100)) // 100

// some weird edge cases that may or may not work:
console.log(sumMul(0, 0)) // "INVALID"
console.log(sumMul(0, 1)) // "INVALID"
console.log(sumMul(42, 322770)) // expected 1240405110 to equal 1240082340 
console.log(sumMul(416, 101504)) // expected 12434240 to equal 12332736
console.log(sumMul(1, 932410)) // expected 434694670255 to equal 434693737845