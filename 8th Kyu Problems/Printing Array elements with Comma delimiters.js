/*
Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements 
of the array in the same order.

"h,o,l,a"
*/

// initital solution:
// const printArray = array => array.join(',');

// shorter:
const printArray = String;

console.log(printArray(["h","o","l","a"])); // "h,o,l,a"