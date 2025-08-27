/* Even Odd Pattern #1
Write a function that takes an array / list of numbers and returns a number.

See the examples and try to guess the pattern:

(1, 2, 6, 1, 6, 3, 1, 9, 6) => 393
(1, 2, 3)                   =>   5
(0, 2, 3)                   =>   3
(1, 0, 3)                   =>   3
(3, 2)                      =>   6
*/

const EvenOdd = arr => arr.reduce((sum, n, i) => i % 2 ? sum * n : sum + n, 0);

console.log(EvenOdd([1,2,2,1,6,1,3,9,6,1])) // 123
console.log(EvenOdd([1, 2, 6, 1, 6, 3, 1, 9, 6])) // 393
console.log(EvenOdd([1, 2, 3])                  ) //   5
console.log(EvenOdd([0, 2, 3])                  ) //   3
console.log(EvenOdd([1, 0, 3])                  ) //   3
console.log(EvenOdd([3, 2])                     ) //   6

console.log(EvenOdd([1, 2, 6, 1, 6, 1, 3, 9, 6])) // 159
console.log(EvenOdd([0, 0, 3])) // 3
console.log(EvenOdd([1, 2, 2, 1, 6, 1, 3, 9, 6, 2, 32])) // 278
console.log(EvenOdd([1, 2, 2, 1, 6, 10, 3, -1, 6, 2, 32])) // -162
console.log(EvenOdd([37, 75, 24, 84, 84])) // 235200
console.log(EvenOdd([82, 26, 73, -1])) // -2205