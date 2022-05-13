/*
Your task is to remove all duplicate words from a string, 
leaving only single (first) words entries.

Example:
Input:
'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:
'alpha beta gamma delta'
*/

// initital solution:
// const removeDuplicateWords = s => {
//     const str = s.split(' ');
//     let obj = {};
//     for (let i = 0; i < str.length; i++) {
//         obj[str[i]] = ++obj[str[i]] || i;
//     }
//     return Object.keys(obj);
// }

// alternatively:
// const removeDuplicateWords = s => Object.keys(s.split(' ').reduce((sum, n) => (sum[n] = ++sum[n] || 1) && sum, {}));

// alternative #3:
// const removeDuplicateWords = s => {
//     const arr = s.split(' ');
//     return arr.filter((e, i) => arr.indexOf(e) === i);
// }

const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ');

console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')) // 'alpha beta gamma delta'