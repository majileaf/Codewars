/*
Description:
Remove n exclamation marks in the sentence from left to right. 
n is positive integer.

Examples
remove("Hi!",1) === "Hi"
remove("Hi!",100) === "Hi"
remove("Hi!!!",1) === "Hi!!"
remove("Hi!!!",100) === "Hi"
remove("!Hi",1) === "Hi"
remove("!Hi!",1) === "Hi!"
remove("!Hi!",100) === "Hi"
remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"
*/

// initial solution:
// const remove = (s, n) => {
//     let str = s.split('');
//     let counter = n;
//     let i = 0;
//     while (counter && i !== str.length) {
//         if (str[i] === '!') {
//             str[i] = '';
//             counter--;
//         }
//         i++
//     }
//     return str.join('');
// }

const remove = (s, n) => {
    const strlength = s.length;
    let str = s;
    
    for (let i = 0; i < strlength && i < n; i++) {
        str = str.replace("!", ""); 
    }
    return str; 
}

console.log(remove("Hi!",1)) // "Hi"
console.log(remove("Hi!",100)) // "Hi"
console.log(remove("Hi!!!",1)) // "Hi!!"
console.log(remove("Hi!!!",100)) // "Hi"
console.log(remove("!Hi",1)) // "Hi"
console.log(remove("!Hi!",1)) // "Hi!"
console.log(remove("!Hi!",100)) // "Hi"
console.log(remove("!!!Hi !!hi!!! !hi",1)) // "!!Hi !!hi!!! !hi"
console.log(remove("!!!Hi !!hi!!! !hi",3)) // "Hi !!hi!!! !hi"
console.log(remove("!!!Hi !!hi!!! !hi",5)) // "Hi hi!!! !hi"
console.log(remove("!!!Hi !!hi!!! !hi",100)) //"Hi hi hi"