/* Billiards triangle
Remember the triangle of balls in billiards? To build a 
classic triangle (5 levels) you need 15 balls. With 3 balls 
you can build a 2-level triangle, etc.

For more examples,

pyramid(1) == 1

pyramid(3) == 2

pyramid(6) == 3

pyramid(10) == 4

pyramid(15) == 5

Write a function that takes number of balls (≥ 1) and calculates 
how many levels you can build a triangle.
*/

// initial solution:
// const pyramid = balls => {
//     let total = 0;
//     let i = 0;

//     while (total <= balls) {
//         total += i + 1;
//         i++;
//     }

//     return i - 1;
// }

// Math solution:
const pyramid = balls => Math.floor(0.5 * (Math.sqrt(8 * balls + 1) - 1));

console.log(pyramid(1)) // 1
console.log(pyramid(4)) // 2
console.log(pyramid(20)) // 5
console.log(pyramid(100)) // 13
console.log(pyramid(9999)) // 140