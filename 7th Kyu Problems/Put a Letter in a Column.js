/* Put a Letter in a Column
Create a function that takes index [0, 8] and a character. It returns a string with columns. 
Put character in column marked with index.

Ex.: index = 2, character = 'B'

| | |B| | | | | | |
 0 1 2 3 4 5 6 7 8

Assume that argument index is integer [0, 8]. Assume that argument character is string with one character.
*/

const buildRowText = (index, character) => Array(9).fill('| ').fill(`|${character}`, index, index + 1).join('') + '|';

console.log(buildRowText(2, 'A')) // '| | |A| | | | | | |'
console.log(buildRowText(0, 'A')) // '|A| | | | | | | | |'
console.log(buildRowText(8, 'A')) // '| | | | | | | | |A|'