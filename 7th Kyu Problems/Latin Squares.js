/* Latin Squares
A latin square is an n × n array filled with the integers 1 to n, each occurring once in each row and column.

Here are examples of latin squares of size 4 and 7:
[[1, 4, 3, 2],      [[2, 3, 1, 7, 4, 6, 5], 
 [4, 3, 2, 1],       [7, 1, 6, 5, 2, 4, 3], 
 [3, 2, 1, 4],       [6, 7, 5, 4, 1, 3, 2], 
 [2, 1, 4, 3]]       [4, 5, 3, 2, 6, 1, 7], 
                     [5, 6, 4, 3, 7, 2, 1], 
                     [1, 2, 7, 6, 3, 5, 4], 
                     [3, 4, 2, 1, 5, 7, 6]]

Latin squares have many practical uses, for example in error-correcting-codes and the design of agricultural 
experiments. See https://en.wikipedia.org/wiki/Latin_square for more details. 
Sudoku is a special type of 9 x 9 latin square, with additional conditions.

Task: Write a function that returns a latin square for any positive integer n.
*/

const makeLatinSquare = n => {
  const arr = [];
  let row = [];
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
          row.push((i + j) % n + 1);
      }
      arr.push(row);
      row = [];
  }
  return arr;
}