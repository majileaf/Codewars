/* Number of Divisions
Calculate how many times a number can be divided by a given number.

Example
For example the number 6 can be divided by 2 two times:

1. 6 / 2 = 3
2. 3 / 2 = 1 remainder = 1

100 can be divided by 2 six times:

1. 100 / 2 = 50
2. 50 / 2 = 25
3. 25 / 2 = 12 remainder 1
4. 12 / 2 = 6
5. 6 / 2 = 3
6. 3 / 2 = 1 remainder 1
*/

// const divisions = (n, divisor, i = 0) => n < divisor ? i : divisions(n / divisor, divisor, ++i);

const divisions = (n, divisor) => Math.floor(Math.log(n) / Math.log(divisor));

console.log(divisions(6, 2)) // 2
console.log(divisions(100, 2)) // 6
console.log(divisions(2450, 5)) // 4
console.log(divisions(9999, 3)) // 8
console.log(divisions(2, 3)) // 0
console.log(divisions(5, 5)) // 1