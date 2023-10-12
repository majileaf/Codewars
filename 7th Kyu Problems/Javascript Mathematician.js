/* Javascript Mathematician
You are writing a function that takes two sets of arguments of arbitrary length. 
The return value will be the sum of the values of all of the arguments.

The function should contain at least 1 argument per set.

calculate(1)(1) // should return 2
calculate(1,1)(1) // should return 3
calculate(1,1)(1,-1) // should return 2
calculate(2,4)(3,7,1) // should return 17
*/

const calculate = (...set1) => (...set2) => [...set1, ...set2].reduce((sum, n) => sum + n, 0);

console.log(calculate(1)(1)) // 2
console.log(calculate(1,1)(1)) // 3
console.log(calculate(1,1)(1,-1)) // 2
console.log(calculate(2,4)(3,7,1)) // 17