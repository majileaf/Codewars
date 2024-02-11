/* Reverser
Impliment the reverse function, which takes in input n and reverses it. 
For instance, reverse(123) should return 321. You should do this without 
converting the inputted number into a string.

// Please do not use
const forbidden = "
                  '
                  `
                  string
                  fixed
                  precision
                  .keys
*/

const reverse = n => {
    const arr = [];
    while (n > 0) {
        arr.push(n % 10);
        n = Math.floor(n / 10);
    } 
    return arr.reduce((sum, n, i) => sum + n * 10 ** (arr.length - 1 - i), 0);
}

// alternatively:
// const reverse = n => {
//   let sum = 0;
//   while (n > 0) {
//       sum = sum * 10 + n % 10;
//       n = Math.floor(n / 10);
//   }
//   return sum;
// }

console.log(reverse(1234)) // 4321
console.log(reverse(10987)) // 78901
console.log(reverse(1020)) // 201