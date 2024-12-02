/* Matrix creation
Create an identity matrix of the specified size ( >= 0 ).

Some examples:

(1)  =>  [[1]]

(2) => [ [1,0],
         [0,1] ]

       [ [1,0,0,0,0],
         [0,1,0,0,0],
(5) =>   [0,0,1,0,0],
         [0,0,0,1,0],
         [0,0,0,0,1] ]  
*/

const getMatrix = number => [...Array(number)].map((_, i) => Array(number).fill(0).fill(1, i, i + 1));

console.log(getMatrix(0)) // []
console.log(getMatrix(1)) // [[1]]
console.log(getMatrix(2)) // [[1, 0], [0, 1]]
console.log(getMatrix(5)) // [[1, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]]