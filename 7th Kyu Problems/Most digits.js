/* Most digits
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, 
return the first one in the array.
*/

const findLongest = array => array.reduce((sum, n) => (String(n).length > String(sum).length ? n : sum), 0);

console.log(findLongest([1, 10, 100])) // 100
console.log(findLongest([9000, 8, 800])) // 9000
console.log(findLongest([8, 900, 500])) // 900