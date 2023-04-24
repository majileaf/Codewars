/* Mispelled word
Create a function mispelled(word1, word2):

mispelled('versed', 'xersed'); // returns true
mispelled('versed', 'applb'); // returns false
mispelled('versed', 'v5rsed'); // returns true
mispelled('1versed', 'versed'); // returns true
mispelled('versed', 'versed'); // returns true
It checks if the word2 differs from word1 by at most one character.

This can include an extra char at the end or the beginning of either of words.

In the tests that expect true, the mispelled word will always differ mostly by one character. 
If the two words are the same, return True.
*/

// initial solution:
// const mispelled = (word1, word2) => {
//     const diffLength = Math.abs(word2.length - word1.length);
//     switch (diffLength) {
//         case 0: return word1.split('').filter((_, i) => word1[i] !== word2[i]).length <= 1;
//         case 1: return (word2.length > word1.length) 
//             ? word2.split(word1).join('').length === 1 
//             : word1.split(word2).join('').length === 1;
//         default: return false;
//     };
// }

const mispelled = (word1, word2) => {
    const diffLength = Math.abs(word2.length - word1.length);
    switch (diffLength) {
        case 0: return word1.split('').filter((_, i) => word1[i] !== word2[i]).length <= 1;
        case 1: return word1.includes(word2) || word2.includes(word1);
        default: return false;
    };
}

console.log(mispelled('versed', 'xersed')) // true
console.log(mispelled('versed', 'applb')) // false

console.log(mispelled('versed', 'v5rsed')) // true
console.log(mispelled('1versed', 'versed')) // true
console.log(mispelled('versed', 'versed1')) // true

console.log(mispelled('versed', 'aversed')) // true
console.log(mispelled('aaversed', 'versed')) // false
console.log(mispelled('versed', 'aaversed')) // false