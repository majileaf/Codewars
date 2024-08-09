/* Operations with sequence
Steps
1. Square the numbers that are greater than zero.
2. Multiply by 3 every third number.
3. Multiply by -1 every fifth number.
4. Return the sum of the sequence.

Example
{ -2, -1, 0, 1, 2 } returns -6
1. { -2, -1, 0, 1 * 1, 2 * 2 }
2. { -2, -1, 0 * 3, 1, 4 }
3. { -2, -1, 0, 1, -1 * 4 }
4. -6

P.S.: The sequence consists only of integers. And try not to use "for", "while" or "loop" statements.
*/

const checkSteps = (num, pos) => {
    if (num > 0) num = num ** 2;
    if (pos % 3 === 0) num *= 3;
    if (pos % 5 === 0) num *= -1;
    return num;
}
const calc = a => a.reduce((sum, n, i) => sum + checkSteps(n, i + 1), 0);

console.log(calc([ -2, -1, 0, 1, 2 ])) // -6
console.log(calc([ 0, 2, 1, -6, -3, 3 ])) // 31
console.log(calc([ 0 ])) // 0
console.log(calc([ 1, 1, 1, 1, 1 ])) // 5