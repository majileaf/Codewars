/* Diagonals sum
 Create a function that receives a (square) matrix and calculates the sum of both diagonals (main and secondary)
    Matrix = array of n length whose elements are n length arrays of integers.

3x3 example:
[
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
]

returns --> 30 // 1 + 5 + 9 + 3 + 5 + 7
*/

const sum = matrix => matrix.reduce((sum, _, i) => sum + matrix[i][i] + matrix[i][matrix.length - 1 - i], 0);

console.log(sum([])) // 0
console.log(sum([[4]])) // 8
console.log(sum([[1,2], [3,4]])) // 1 + 2 + 3 + 4
console.log(sum([[1,2,3], [4,5,6], [7,8,9]])) // 1 + 5 + 9 + 3 + 5 + 7
console.log(sum([[-2,5,3,2],[9,-6,5,1],[3,2,7,3],[-1,8,-4,8]])) // -2 -6 + 7 + 8 + 2 +5 + 2 -1