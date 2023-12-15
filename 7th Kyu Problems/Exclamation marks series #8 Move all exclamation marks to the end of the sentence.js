/* Exclamation marks series #8: Move all exclamation marks to the end of the sentence
Description:
Move all exclamation marks to the end of the sentence

Examples
"Hi!"          ---> "Hi!"
"Hi! Hi!"      ---> "Hi Hi!!"
"Hi! Hi! Hi!"  ---> "Hi Hi Hi!!!"
"Hi! !Hi Hi!"  ---> "Hi Hi Hi!!!"
"Hi! Hi!! Hi!" ---> "Hi Hi Hi!!!!"
*/

const remove = string => {
    const count = [...string].reduce((sum, n) => sum + (n === '!'), 0);
    return string.replace(/!/g, '') + '!'.repeat(count);
}

// alternatively:
// const remove = string => {
//   const str = string.replace(/!/g, '');
//   return str + '!'.repeat(string.length - str.length);
// }

// alternatively #2:
// const remove = s => s.replace(/!/g, '') + s.replace(/[^!]/g, '');

console.log(remove("Hi!")) // "Hi!"
console.log(remove("Hi! Hi!")) // "Hi Hi!!"
console.log(remove("Hi! Hi! Hi!")) // "Hi Hi Hi!!!"
console.log(remove("Hi! !Hi Hi!")) // "Hi Hi Hi!!!"
console.log(remove("Hi! Hi!! Hi!")) // "Hi Hi Hi!!!!"