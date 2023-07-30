/* Authenticate a list of usernames
Given an array of strings representing a list of usernames, return true only if all usernames 
comply with your company's guidelines. Return false otherwise.

The guidelines say that the username is valid only if:
it is between 6-10 characters long;
contains at least 1 lowercase letter;
contains at least 1 number;
contains only numbers and lowercase letters.

Examples of arrays that will be tested:
const usernames1 = ['john123', 'alex222', 'sandra1']; // returns true
const usernames2 = ['john123', 'alex222', 'sandraW']; // returns false because sandraW has no number
const usernames3 = ['john_123', 'alex222', 'sandra1']; // returns false because john_123 contains an invalid character

Notes:
You will always be given an array with at least 1 string to check.
*/

const authList = arr => arr.every(e => (/^(?=.*?[a-z])(?=.*?[\d])[a-z\d]{6,10}$/).test(e));

console.log(authList(['john123', 'alex222', 'sandra1'])) // true
console.log(authList(['john123', 'alex222', 'sandraW'])) // false
console.log(authList(['john_123', 'alex222', 'sandra1'])) // false
console.log(authList([''])) // false
console.log(authList(['123456'])) // false
console.log(authList(['abcdef'])) // false