/* X marks the spot!
Write a function that takes in a positive integer n and returns an n x n matrix with an X in the middle. 
The X will be represented by 1's and the rest will be 0's.

Examples
5 --->   [[1, 0, 0, 0, 1],
          [0, 1, 0, 1, 0],
          [0, 0, 1, 0, 0],
          [0, 1, 0, 1, 0],
          [1, 0, 0, 0, 1]]

6  --->  [[1, 0, 0, 0, 0, 1],
          [0, 1, 0, 0, 1, 0],
          [0, 0, 1, 1, 0, 0],
          [0, 0, 1, 1, 0, 0],
          [0, 1, 0, 0, 1, 0],
          [1, 0, 0, 0, 0, 1]]
*/

const x = n => {
    const arr = [];

    for (let i = 0; i < n; i++) {
        let row = [];
        for (let j = 0; j < n; j++) {
            (i === j || j === n - 1 - i) ? row.push(1) : row.push(0);
        }
        arr.push(row)
    }
    return arr;
}

console.log(x(1)) // [[1]]
console.log(x(2)) // [[1, 1], [1, 1]]
console.log(x(3)) // [[1, 0, 1], [0, 1, 0], [1, 0, 1]]
console.log(x(4)) // [[1, 0, 0, 1], [0, 1, 1, 0], [0, 1, 1, 0], [1, 0, 0, 1]]
console.log(x(5)) // [[1, 0, 0, 0, 1], [0, 1, 0, 1, 0], [0, 0, 1, 0, 0], [0, 1, 0, 1, 0], [1, 0, 0, 0, 1]]
console.log(x(6)) // [[1, 0, 0, 0, 0, 1], [0, 1, 0, 0, 1, 0], [0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0], [0, 1, 0, 0, 1, 0], [1, 0, 0, 0, 0, 1]]