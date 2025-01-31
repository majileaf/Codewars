/*
Description:
Remove all exclamation marks from the end of sentence.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
*/

// initial: 
// const remove = string => {
//     const str = string.split('');
//     while (str[str.length-1] === '!') {
//         str.pop();
//     }
//     return str.join('');
// }

const remove = string => {
    for (let i = string.length - 1; i >= 0; i--) { 
        if (string[i] !== '!') return string.slice(0, i + 1);
    }
}

console.log(remove("Hi!")) //  "Hi"
console.log(remove("Hi!!!")) //  "Hi"
console.log(remove("!Hi")) //  "!Hi"
console.log(remove("!Hi!")) //  "!Hi"
console.log(remove("Hi! Hi!")) //  "Hi! Hi"
console.log(remove("Hi")) //  "Hi"