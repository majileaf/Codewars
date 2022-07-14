/*
Assume "#" is like a backspace in string. This means that string 
"a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""
*/

// initial solution:
// const cleanString = s => {
//     s = s.split('');
//     let idx = null;
  
//     while (s.includes('#')) {
//         idx = s.indexOf('#');
//         idx - 1 < 0 ? s.shift() : s.splice(idx - 1, 2);
//     }
//     return s.join('');
// }

const cleanString = s => s
  .split('')
  .reduce((sum, n) => (n === '#' ? sum.pop() : sum.push(n), sum), [])
  .join('');

console.log(cleanString('abc#d##c')) // 'ac'
console.log(cleanString('abc####d##c#')) // ''
console.log(cleanString('abc##d######')) // ''
console.log(cleanString('abc##d######')) // ''
console.log(cleanString('#######')) // ''
console.log(cleanString('')) // ''
