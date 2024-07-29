/* Sum squares of numbers in list that may contain more lists
Write a function that sums squares of numbers in list that may contain more lists
Example:

var l = [1,2,3]
SumSquares(l) == 14

var l = [[1,2],3]
SumSquares(l) == 14

var l = [[[[[[[[[1]]]]]]]]]
SumSquares(l) == 1

var l = [10,[[10],10],[10]]
SumSquares(l) == 400
Note: your solution must NOT modify the original list
*/

const SumSquares = l => l.flat(Infinity).reduce((sum, n) => sum + n ** 2, 0);

// alternative:
// const SumSquares = l => Array.isArray(l) ? l.reduce((sum, n) => sum + SumSquares(n), 0) : l ** 2;

console.log(SumSquares([1,2,3])) // 14
console.log(SumSquares([[1,2],3])) // 14
console.log(SumSquares([[[[[[[[[1]]]]]]]]])) // 1
console.log(SumSquares([10,[[10],10],[10]])) // 400
console.log(SumSquares([1,[[3],10,5,[2,[3],[4],[5,[6]]]],[10]])) // 325