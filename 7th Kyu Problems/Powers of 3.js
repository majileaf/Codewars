/* Powers of 3
Given a positive integer N, return the largest integer k such that 3^k < N.

For example,
largest_power(3) == 0
largest_power(4) == 1

You may assume that the input to your function is always a positive integer.
*/

const largestPower = n => {
    let k = 0;
    while (3 ** k < n) {
        k++;
    }
    return k - 1;
}

// alternatively:
// const largestPower = n => Math.ceil(Math.log10(n) / Math.log10(3)) - 1;

console.log(largestPower(3)) // 0
console.log(largestPower(5)) // 1
console.log(largestPower(7)) // 1
console.log(largestPower(81)) // 3
console.log(largestPower(82)) // 4