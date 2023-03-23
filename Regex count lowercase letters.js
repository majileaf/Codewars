/* Regex count lowercase letters
Your task is simply to count the total number of lowercase letters in a string.

Examples
lowercaseCount("abc"); ===> 3
lowercaseCount("abcABC123"); ===> 3
lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3
lowercaseCount(""); ===> 0;
lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0
lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26
*/

// initial solution: 
// const lowercaseCount = str => {
//     return [...str].filter(e => (/[a-z]/).test(e)).length;
// }

const lowercaseCount = str => (str.match(/[a-z]/g) || []).length;

console.log(lowercaseCount("abc")) // 3
console.log(lowercaseCount("abcABC123")) // 3
console.log(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~")) // 3
console.log(lowercaseCount("")) // 
console.log(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~")) // 
console.log(lowercaseCount("abcdefghijklmnopqrstuvwxyz")) // 26