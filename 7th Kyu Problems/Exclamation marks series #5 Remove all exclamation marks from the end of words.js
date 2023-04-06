/* Exclamation marks series #5: Remove all exclamation marks from the end of words
Task
Remove all exclamation marks from the end of words. 
Words are separated by a single space. 
There are no exclamation marks within a word.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi Hi"
remove("!!!Hi !!hi!!! !hi") === "!!!Hi !!hi !hi"
*/

// initial solution:
// const remove = string => string
//     .split(' ')
//     .map(e => e.replace(/!+$/g, ''))
//     .join(' ');

const remove = string => string.replace(/\b!+/g, '');

console.log(remove("Hi!")) // "Hi"
console.log(remove("Hi!!!")) // "Hi"
console.log(remove("!Hi")) // "!Hi"
console.log(remove("!Hi!")) // "!Hi"
console.log(remove("Hi! Hi!")) // "Hi Hi"
console.log(remove("!!!Hi !!hi!!! !hi")) // "!!!Hi !!hi !hi"