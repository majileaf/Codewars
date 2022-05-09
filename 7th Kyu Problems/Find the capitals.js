/*
Instructions
Write a function that takes a single string (word) as argument. 
The function must return an ordered list containing the indexes 
of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/

// initial solution:
// const capitals = word => {
//     let idx = [];
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] === word[i].toUpperCase() && word[i] != parseFloat(word[i])) idx.push(i);
//     }
//     return idx;
// }

const capitals = word => word.split('').flatMap((e, i) => e !== word[i].toLowerCase() ? i : []);

console.log(capitals('CodEWaRs')) // [0,3,4,6] 