/* Sum - Square Even, Root Odd
Complete the function that takes a list of numbers (nums), as the only argument to the function. 
Take each number in the list and square it if it is even, or square root the number if it is odd. 
Take this new list and return the sum of it, rounded to two decimal places.

The list will never be empty and will only contain values that are greater than or equal to zero.
*/

const sumSquareEvenRootOdd = ns => +ns.reduce((sum, n) => sum + (n % 2 ? Math.sqrt(n) : n * n), 0).toFixed(2);

// alternatively
// const sumSquareEvenRootOdd = ns => +ns.reduce((sum, n) => sum + (n % 2 ? n ** 0.5 : n ** 2), 0).toFixed(2);

console.log(sumSquareEvenRootOdd([4,5,7,8,1,2,3,0])) // 91.61
console.log(sumSquareEvenRootOdd([1,14,9,8,17,21])) // 272.71