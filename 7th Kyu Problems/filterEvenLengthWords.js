/* filterEvenLengthWords
Write a function called "filterEvenLengthWords".

Given an array of strings, "filterEvenLengthWords" returns an array containing 
only the elements of the given array whose length is an even number.

var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']
*/

const filterEvenLengthWords = words => words.filter(e => e.length % 2 === 0);

console.log(filterEvenLengthWords(['Hello', 'World'])) // []
console.log(filterEvenLengthWords(['One', 'Two', 'Three', 'Four'])) // ['Four']
console.log(filterEvenLengthWords(['word', 'words', 'word', 'words'])) // ['word', 'word']