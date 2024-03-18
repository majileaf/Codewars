/* Simple Fun #181: Rounding
Task
Round the given number n to the nearest multiple of m.
If n is exactly in the middle of 2 multiples of m, return n instead.

Example
For n = 20, m = 3, the output should be 21.
For n = 19, m = 3, the output should be 18.
For n = 50, m = 100, the output should be 50.

Input/Output
[input] integer n
1 ≤ n < 10^9.

[input] integer m
3 ≤ m < 109.

[output] an integer
*/

const rounding = (n, m) => {
  if (m === (n % m) * 2) return n;
  const a = Math.floor(n / m) * m;
  const b = Math.ceil(n / m) * m;
  return n - a < b - n ? a : b;
}

// alternatively:
// const rounding = (n, m) => (n / m) % 1 === 0.5 ? n : Math.round(n / m) * m;

console.log(rounding(20,3)) // 21
console.log(rounding(19,3)) // 18
console.log(rounding(1,10)) // 0
console.log(rounding(50,100)) // 50
console.log(rounding(123,456)) // 0