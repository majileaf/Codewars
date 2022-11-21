/* Inspiring Strings
When given a string of space separated words, return the word 
with the longest length. If there are multiple words with the 
longest length, return the last instance of the word with the 
longest length.

Example:
'red white blue' //returns string value of white
'red blue gold' //returns gold
*/

// initial solution:
// const longestWord = stringOfWords => stringOfWords
//     .split(' ')
//     .reduce(([maxWord, maxLength], word) => word.length >= maxLength 
//         ? [word, word.length] 
//         : [maxWord, maxLength], ["", 0])[0];

const longestWord = stringOfWords => stringOfWords
    .split(' ')
    .reduce((maxWord, word) => word.length >= maxWord.length ? word : maxWord);


console.log(longestWord('a b c d e fgh')) // "fgh" 
console.log(longestWord('one two three')) // "three" 
console.log(longestWord('red blue grey')) // "grey" 