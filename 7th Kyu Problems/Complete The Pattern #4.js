/* Complete The Pattern #4
Task:
You have to write a function pattern which creates the following pattern upto n number of rows. 
If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.

Examples:
pattern(4):
1234
234
34
4

pattern(6):
123456
23456
3456
456
56
6
Note: There are no blank spaces

Hint: Use \n in string to jump to next line
*/

const pattern = (n, str = '') => n > 0 
    ? [...Array(n)].map((_, i) => str = String(n - i) + str).reverse().join('\n')
    : '';

// alternatively: 
// const pattern = (n, str = '') => [...Array(Math.max(0, n))].map(() => str = n-- + str).reverse().join('\n');

console.log(pattern(-1)) // ""
console.log(pattern(0)) // ""
console.log(pattern(1)) // "1"
console.log(pattern(2)) // "12\n2"
console.log(pattern(5)) // "12345\n2345\n345\n45\n5"