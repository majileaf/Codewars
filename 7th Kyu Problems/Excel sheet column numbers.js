/* Excel sheet column numbers
Write a function that, given a column title as it appears in an Excel sheet, returns its corresponding column number.

All column titles will be uppercase.

Examples:
Column title: "A" --> return 1
Column title: "Z" --> return 26
Column title: "AA" --> return 27
*/

const titleToNumber = title => [...title].map((e, i) => (e.charCodeAt() - 64) * 26 ** (title.length - i - 1)).reduce((sum, n) => sum + n, 0);

console.log(titleToNumber('A')) // 1
console.log(titleToNumber('Z')) // 26
console.log(titleToNumber('AA')) // 27
console.log(titleToNumber('AZ')) // 52
console.log(titleToNumber('BA')) // 53
console.log(titleToNumber('CODEWARS')) // 28779382963