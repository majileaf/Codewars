/* Sum of a nested list
Implement a function to calculate the sum of the numerical values in a nested list. For example :

sumNested([1, [2, [3, [4]]]]) => 10
*/

const sumNested = arr => arr.flat(Infinity).reduce((sum, n) => sum + n, 0);

console.log(sumNested([1])) // 1
console.log(sumNested([1, 2, 3, 4])) // 10
console.log(sumNested([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
console.log(sumNested([])) // 0
console.log(sumNested([[1], []])) // 1
console.log(sumNested([[1, 2, 3, 4]])) // 10
console.log(sumNested([1, [1], [[1]], [[[1]]]])) // 4
console.log(sumNested([1, [1], [1, [1]], [1, [1], [1, [1]]]])) // 8
console.log(sumNested([[[[], [], [[[[[[[[[[]]]]]]]]]]], [], [], [[[], [[]]]]], []])) // 0