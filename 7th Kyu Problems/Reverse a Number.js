/*
Given a number, write a function to output its reverse digits. 
(e.g. given 123 the answer is 321)

Numbers should preserve their sign; i.e. a negative number 
should still be negative when reversed.

Examples
 123 ->  321
-456 -> -654
1000 ->    1
*/

const reverseNumber = n => Math.sign(n) * [...String(Math.abs(n))].reverse().join('');

console.log(reverseNumber(123)) // 321
console.log(reverseNumber(-123)) // -321, 'Negative Numbers should be preserved'
console.log(reverseNumber(1000)) // 1, 'Should handle numbers ending with "0"'
console.log(reverseNumber(4321234)) // 4321234
console.log(reverseNumber(5)) // 5
console.log(reverseNumber(0)) // 0
console.log(reverseNumber(98989898)) // 89898989