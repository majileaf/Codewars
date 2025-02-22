/* Number from identity matrix(I)
Given the size n of an identity matrix (I), find the number represented by the identity matrix values as its bits.

Examples:
Identity matrix of size 4:
1 0 0 0
0 1 0 0
0 0 1 0
0 0 0 1
should return 33825
Explanation: 1000_0100_0010_0001 -> 33825

Identity matrix of size 2:
1 0
0 1
should return 9
Explanation: 10_01 -> 1x(2^0) + 1x(2^3) = 9

Limits:
0 < n < 65
length code <= 1024
*/

const solve = n => {
  const iMatrix = [...Array(n)].map((_, i) => Array(n).fill(0).fill(1, i, i + 1));
  return iMatrix.flat(1).reverse().reduce((sum, n, i) => sum + (n === 1 ? BigInt(2) ** BigInt(i) : BigInt(n)), BigInt(0));
}

// alternatively:
// const solve = n => {
//   const iMatrix = [...Array(n)].map((_, i) => Array(n).fill(0).fill(1, i, i + 1));
//   return BigInt('0b' + iMatrix.flat(1).join(''))
// }

console.log(solve(2)) // 9n
console.log(solve(4)) // 33825n