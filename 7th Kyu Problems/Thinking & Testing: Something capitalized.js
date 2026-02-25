/* Thinking & Testing : Something capitalized
No Story

No Description

Only by Thinking and Testing

Look at the results of the testcases, and guess the code!
*/

const testit = s => s.replace(/\w+/g, char => char.slice(0, -1) + char.slice(-1).toUpperCase());

console.log(testit("")) // ""
console.log(testit("a")) // "A"
console.log(testit("b")) // "B"
console.log(testit("a a")) // "A A"
console.log(testit("a b")) // "A B"
console.log(testit("a b c")) // "A B C"