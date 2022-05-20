/*
Task
Given a string str, reverse it omitting all 
non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".
For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str

A string consists of lowercase latin letters, digits and symbols.
[output] a string
*/

// initial solution:
// const reverseLetter = str => {
//     let arr = [];

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] >= 'a' && str[i] <= 'z') arr.push(str[i]);
//     }
//     return arr.reverse().join('');
// }

// alternatively:
// const reverseLetter = str => str
//     .split('')
//     .reduce((sum, n) => ((n >= 'a' && n <= 'z') ? sum.push(n) : n) && sum, [])
//     .reverse()
//     .join('');

const reverseLetter = str => str
    .split('')
    .filter(e => e >= 'a' && e <= 'z')
    .reverse()
    .join('');

console.log(reverseLetter("krishan")) // "nahsirk"
console.log(reverseLetter("ultr53o?n")) // "nortlu"
console.log(reverseLetter("ab23c")) // "cba"
console.log(reverseLetter("krish21an")) // "nahsirk"