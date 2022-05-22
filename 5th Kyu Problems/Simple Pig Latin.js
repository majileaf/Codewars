/*
Move the first letter of each word to the end of it, then add "ay" 
to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

const pigIt = str => str.split(' ').map(e => (e === "?" || e === "!") ? e : e.slice(1) + e[0] + 'ay').join(' ');

console.log(pigIt('Pig latin is cool')) // 'igPay atinlay siay oolcay'
console.log(pigIt('This is my string')) // 'hisTay siay ymay tringsay'

console.log(pigIt('Pig latin is cool !')) // 'igPay atinlay siay oolcay !'
console.log(pigIt('Pig latin is cool ?')) // 'igPay atinlay siay oolcay ?'