/* Potenciation
The function takes in 2 inputs x and y, and should return x to the power of y
Simple, right? But you're NOT allowed to use Math.pow();
Obs: x and y will be naturals, so DON'T take fractions into consideration;
Note : zero to the power of zero equals one in this kata
*/

const power = (x,y) => x ** y;

// alternatively:
// const power = (x, y) => {
//   if (y === 0) return 1;
//   if (y === 1) return x;
//   return y % 2 ? power(x, y - 1) * x : power(x * x, y / 2);
// }

console.log(power(1,701270)) // 1
console.log(power(2,2)) // 4
console.log(power(3,2)) // 9
console.log(power(-1,40)) // 1