/* Simple Fun #60: Swap Diagonals
Task

The longest diagonals of a square matrix are defined as follows:

the first longest diagonal goes from the top left corner to the bottom right one;
the second longest diagonal goes from the top right corner to the bottom left one.

Given a square matrix, your task is to swap its longest diagonals by exchanging their elements at the corresponding positions.

Example

For
matrix = [[1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]]

the output should be
[[3, 2, 1],
 [4, 5, 6],
 [9, 8, 7]]

Input/Output
    [input] 2D integer array matrix
    Constraints: 1 ≤ matrix.length ≤ 10, matrix.length = matrix[i].length, 1 ≤ matrix[i][j] ≤ 1000.

    [output] 2D integer array
    Matrix with swapped diagonals.
*/

const swapDiagonals = matrix => {
    for (let i = 0; i < matrix.length; i++) {
        let temp = matrix[i][i];
        matrix[i][i] = matrix[i][matrix[i].length - 1 - i];
        matrix[i][matrix[i].length - 1 - i] = temp;
    }
    return matrix;
}

console.log(swapDiagonals([[1, 2, 3], [4, 5, 6], [7, 8, 9]])) // [[3, 2, 1], [4, 5, 6], [9, 8, 7]]
console.log(swapDiagonals([[239]])) // [[239]]
console.log(swapDiagonals([[1, 10], [100, 1000]])) // [[10, 1], [1000, 100]]
console.log(swapDiagonals([[43, 455, 32, 103], [102, 988, 298, 981], [309, 21, 53, 64], [2, 22, 35, 291]])) // [[103, 455, 32, 43], [102, 298, 988, 981], [309, 53, 21, 64], [291, 22, 35, 2]]