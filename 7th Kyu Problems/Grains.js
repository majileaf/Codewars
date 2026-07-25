/* Grains
Write a program that calculates the number of grains of wheat on a specific square of chessboard given that the number on 
each square is double the previous one.

There are 64 squares on a chessboard.

#Example: square(1) = 1 square(2) = 2 square(3) = 4 square(4) = 8 etc...

Write a program that shows how many grains were on each square.
*/

const square = number => 2 ** (number - 1);

console.log(square(1)) // 1
console.log(square(3)) // 4
console.log(square(4)) // 8
console.log(square(16)) // 32768
console.log(square(32)) // 2147483648