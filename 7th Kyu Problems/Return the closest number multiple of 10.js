/* Return the closest number multiple of 10
Given a number return the closest number to it that is divisible by 10.

Example input:

22
25
37
Expected output:

20
30
40
*/

const closestMultiple10 = num => Math.round(num / 10) * 10;

console.log(closestMultiple10(22)); // 20
console.log(closestMultiple10(25)); // 30
console.log(closestMultiple10(37)); // 40