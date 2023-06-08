/* Alphabetically ordered
Your task is very simple. Just write a function that takes an input string of lowercase 
letters and returns true/false depending on whether the string is in alphabetical order 
or not.

Examples (input -> output)
"kata" -> false ('a' comes after 'k')
"ant" -> true (all characters are in alphabetical order)
*/

const alphabetic = s => [...s].every((_, i) => i === 0 || s[i - 1].charCodeAt() <= s[i].charCodeAt());

// alternatively: 
// const alphabetic = s => s === s.split('').sort((a, b) => a.localeCompare(b)).join('')

console.log(alphabetic("asd")) // false
console.log(alphabetic("codewars")) // false
console.log(alphabetic("door")) // true
console.log(alphabetic("cell")) // true
console.log(alphabetic("z")) // true
console.log(alphabetic("")) // true); 