/* String to list of integers.
Given a string containing a list of integers separated by commas, 
write the function that takes said string and returns a new array / list containing 
all integers present in the string, preserving the order.

Please note that there can be one or more consecutive commas whithout numbers, like so:
"-1,-2,,,,,,3,4,5,,6"

For example
"-1,-2,3,-4,-5"   --> [-1,-2,3,-4,-5]
"1,2,3,,,4,,5,,," --> [1,2,3,4,5]
",,,,,,,"         --> []
*/

const stringToIntArray = s => (s.match(/[-|\d]+/g) || []).map(Number);

console.log(stringToIntArray("1,2,3,4,5")) // [1, 2, 3, 4, 5]
console.log(stringToIntArray("21,12,23,34,45")) // [21, 12, 23, 34, 45]
console.log(stringToIntArray("-1,-2,3,-4,-5")) // [-1, -2, 3, -4, -5]
console.log(stringToIntArray("1,2,3,,,4,,5,,,")) // [1, 2, 3, 4, 5]
console.log(stringToIntArray(",,,,,1,2,3,,,4,,5,,,")) // [1, 2, 3, 4, 5]
console.log(stringToIntArray("")) // []
console.log(stringToIntArray(",,,,,,,")) // []