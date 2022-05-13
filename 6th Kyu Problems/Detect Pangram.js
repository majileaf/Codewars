/*
A pangram is a sentence that contains every single letter of the alphabet at least once. 
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. 
Return True if it is, False if not. 
Ignore numbers and punctuation.
*/

// initial solution:
// const isPangram = string => {
//     let str = string.toLowerCase();
//     let filtered = {};
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] >= 'a' && str[i] <= 'z') filtered[str[i]] = true;
//     }
//     return Object.keys(filtered).length === 26;
// }

const isPangram = string => 
    Object.keys(string
            .toLowerCase()
            .split('')
            .reduce((sum, n) => ((n >= 'a' && n <= 'z') ? (sum[n] = true) && sum : sum), {}))
            .length === 26;

console.log(isPangram("The quick brown fox jumps over the lazy dog.")) // true
console.log(isPangram("This is not a pangram.")) // false