/* Coding 3min : A*B=C
Task:
Give you a number array numbers and a number c.

Find out a pair of numbers(we called them number a and number b) from the array numbers, let a*b=c, 
result format is an array [a,b]

The array numbers is a sorted array, value range: -100...100

The result will be the first pair of numbers, for example,findAB([1,2,3,4,5,6],6) 
should return [1,6], instead of [2,3]

Please see more example in testcases.
*/

const findAB = (numbers, c) => {
  for (let i = 0; i <= numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
          if (numbers[i] * numbers[j] === c) return [numbers[i], numbers[j]];
      }
  }
  return null;
}

console.log(findAB([1,2,3], 3)) // [1,3]
console.log(findAB([1,2,3], 6)) // [2,3]
console.log(findAB([1,2,3], 7)) // null
console.log(findAB([1,2,3,6], 6)) // [1,6]
console.log(findAB([1,2,3,4,5,6], 15)) // [3,5]
console.log(findAB([0,0,2], 4)) // null
console.log(findAB([0,0,2,2], 4)) // [2,2]
console.log(findAB([-3,-2,-2,-1,0,1,2,3,4], 4)) // [-2,-2]
console.log(findAB([-3,-2,-2,-1,0,1,2,3,4], 0)) // [-3,0]
console.log(findAB([-3,-2,-1,0,1,2,3,4], 4)) // [1,4]
console.log(findAB([0,1,2,3], 0)) // [0,1]
console.log(findAB([0,0,2,3], 0)) // [0,0]