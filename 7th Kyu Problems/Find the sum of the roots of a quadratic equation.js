/* Find the sum of the roots of a quadratic equation
Implement function which will return sum of roots of a quadratic equation rounded to 2 decimal places, 
if there are any possible roots, else return None/null/nil/nothing. 

If you use discriminant,when discriminant = 0, x1 = x2 = root => return sum of both roots. 
There will always be valid arguments.

Quadratic equation - https://en.wikipedia.org/wiki/Quadratic_equation
*/

const roots = (a, b, c) => b ** 2 - 4 * a * c < 0 ? null : +(-b / a).toFixed(2);

console.log(roots(1, -35, -23)) // 35
console.log(roots(6, 0, -24)) // 0
console.log(roots(-5, 21, 0)) // 4.2
console.log(roots(1, 5, -24)) // -5
console.log(roots(3, 11, 6)) // -3.67
console.log(roots(1, -5 / 3.0, -26)) // 1.67
console.log(roots(7, -2, -5)) // 0.29
console.log(roots(2, 3, -2)) // -1.5
console.log(roots(3, -2, -5)) // 0.67
console.log(roots(5, 4, 0)) // -0.8
console.log(roots(4, -5, 0)) // 1.25
console.log(roots(2, 8, 8)) // -4
console.log(roots(1, 0, -49)) // 0
console.log(roots(1, 0, -0.16)) // 0
console.log(roots(1, 0, -9)) // 0
console.log(roots(-3, 0, 12)) // 0
console.log(roots(3, 7, 0)) // -2.33
console.log(roots(1, 4, 4)) // -4
console.log(roots(-1, 0, 5.29)) // 0
console.log(roots(1, 12, 36)) // -12
console.log(roots(1, 0, -0.09)) // 0
console.log(roots(3, 0, -15)) // 0
console.log(roots(1, -3, 0)) // 3
console.log(roots(1, 8, 16)) // -8
console.log(roots(-1, 36, 0)) // 36
console.log(roots(5, -8, 0)) // 1.6
console.log(roots(-14, 0, 0)) // 0
console.log(roots(1, -6, 0)) // 6
console.log(roots(1, -11, 30)) // 11
console.log(roots(1, 6, 9)) // -6
console.log(roots(6, 4, 8)) // null
console.log(roots(2, 2, 9)) // null
console.log(roots(1, 6, 10)) // null
console.log(roots(1, 8, 20)) // null
console.log(roots(1, 4, 12)) // null
console.log(roots(3, 4, 9)) // null
console.log(roots(1, 4, 9)) // null
console.log(roots(2, 5, 11)) // null
console.log(roots(2, 6, 9)) // null
console.log(roots(1, 5, 12)) // null
console.log(roots(1, 7, 20)) // null
console.log(roots(1, 3, 12)) // null