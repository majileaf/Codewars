/* Plus - minus - plus - plus - ... - Count
Count how often sign changes in array.

result
number from 0 to ... . Empty array returns 0

example
const arr = [1, -3, -4, 0, 5];

| elem | count |
|------|-------|
|  1   |  0    |
| -3   |  1    |
| -4   |  1    |
|  0   |  2    |
|  5   |  2    |

catchSignChange(arr) == 2;
*/

const checkSign = n => n < 0;
const catchSignChange = arr => arr.reduce((sum, _, i, arr) => sum + (i > 0 ? (checkSign(arr[i]) !== checkSign(arr[i - 1])) : 0), 0);

// alternatively:
// const catchSignChange = arr => arr.slice(1).filter((e, i) => e < 0 !== arr[i] < 0).length;

console.log(catchSignChange([])) // 0
console.log(catchSignChange([1,3,4,5])) // 0
console.log(catchSignChange([-1,-3,-4,-5])) // 0
console.log(catchSignChange([1,-3,-4,0,5])) // 2
console.log(catchSignChange([-47,84,-30,-11,-5,74,77])) // 3