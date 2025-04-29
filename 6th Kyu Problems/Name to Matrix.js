/* Name to Matrix
Given a name, turn that name into a perfect square matrix (nested array with 
the amount of arrays equivalent to the length of each array).

You will need to add periods (.) to the end of the name if necessary, 
to turn it into a matrix.

If the name has a length of 0, return "name must be at least one letter"

Examples
"Bill" ==> [ ["B", "i"],
             ["l", "l"] ]

"Frank" ==> [ ["F", "r", "a"],
              ["n", "k", "."],
              [".", ".", "."] ]

*/

const matrixfy = str => {
  if (!str.length) return 'name must be at least one letter';
  const len = Math.ceil(Math.sqrt(str.length));
  const arr = Array(len).fill([...Array(len)]);
  let k = 0;
  return arr.map(e => e.map(f => str[k++] || '.'));
};

console.log(matrixfy('')) // 'name must be at least one letter'
console.log(matrixfy('A')) // [['A']])
console.log(matrixfy('Franklin')) // [['F', 'r', 'a'], ['n', 'k', 'l'], ['i', 'n', '.']])