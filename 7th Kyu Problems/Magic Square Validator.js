/* Magic Square Validator
In recreational mathematics, a magic square is an arrangement of distinct numbers (i.e., each number is used once), usually integers, 
in a square grid, where the numbers in each row, and in each column, and the numbers in the main and secondary diagonals, all add up 
to the same number, called the "magic constant."

For example, the following "square":
  4    9    2 -> 15
  3    5    7 -> 15
  8    1    6 -> 15
 /v    v    v \
15 15   15   15  15

A 3x3 magic square will have its sums always resulting to 15, this number is called the "magic constant" and changes according to the square size.

In this problem you will have to create a function that receives a 3x3 'square' and returns True if it is magic and False otherwise. 
The sum of rows, columns or diagonals should always equal 15.

For example, the above square will be passed like: [4, 9, 2, 3, 5, 7, 8, 1, 6] and the output should be True
[9, 4, 7, 3, 5, 2, 8, 6, 1] should return False
*/

const isMagical = square => {
  if (new Set(square).size !== 9) return false;
  for (let i = 0; i < 3; i++) {
      if (square[i] + square[i + 3] + square[i + 6] !== 15) return false;
      if (square[i * 3] + square[(i * 3) + 1] + square[(i * 3) + 2] !== 15) return false;
  }
  if (square[0] + square[4] + square[8] !== 15 || square[2] + square[4] + square[6] !== 15) return false;
  return true;
}

console.log(isMagical([4, 9, 2, 3, 5, 7, 8, 1, 6])) // true
console.log(isMagical([4, 9, 2, 3, 5, 7, 8, 6, 1])) // false
console.log(isMagical([4, 5, 2, 3, 9, 7, 8, 1, 6])) // false