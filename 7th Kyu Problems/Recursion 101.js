/* Recursion 101
In this Kata, you will be given two positive integers a and b and 
your task will be to apply the following operations:

i) If a = 0 or b = 0, return [a,b]. Otherwise, go to step (ii);
ii) If a ≥ 2*b, set a = a - 2*b, and repeat step (i). Otherwise, go to step (iii);
iii) If b ≥ 2*a, set b = b - 2*a, and repeat step (i). Otherwise, return [a,b].
a and b will both be lower than 10E8.

More examples in tests cases. Good luck!
*/

const solve = (a, b) => 
    a === 0 || b === 0 ? [a, b] 
    : a >= 2 * b ? solve(a - 2 * b, b) 
    : b >= 2 * a ? solve(a, b - 2 * a) 
    : [a, b];

console.log(solve(6,19)) // [6,7]
console.log(solve(2,1)) // [0,1]
console.log(solve(22,5)) // [0,1]
console.log(solve(2,10)) // [2,2]