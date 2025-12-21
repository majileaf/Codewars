/* From A to Z
Given a string indicating a range of letters, return a string which includes all the letters in that range, 
including the last letter.
Note that if the range is given in capital letters, return the string in capitals also!

Examples
"a-z" ➞ "abcdefghijklmnopqrstuvwxyz"
"h-o" ➞ "hijklmno"
"Q-Z" ➞ "QRSTUVWXYZ"
"J-J" ➞ "J"

Notes
    A hyphen will separate the two letters in the string.
    You don't need to worry about error handling in this kata (i.e. both letters will be the same case and the second letter 
    will not be before the first alphabetically).
*/

const gimmeTheLetters = sp => {
    const [start, end] = sp.split('-');
    const alphabet = start === start.toLowerCase() ? 'abcdefghijklmnopqrstuvwxyz' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return alphabet.slice(alphabet.indexOf(start), alphabet.indexOf(end) + 1);
}

// Single Letter Ranges
console.log(gimmeTheLetters('J-J')) // 'J'
console.log(gimmeTheLetters('Z-Z')) // 'Z'
console.log(gimmeTheLetters('a-a')) // 'a'

// Two Letter Ranges
console.log(gimmeTheLetters('a-b')) // 'ab'
console.log(gimmeTheLetters('y-z')) // 'yz'
console.log(gimmeTheLetters('H-I')) // 'HI'

// Three Letter Ranges
console.log(gimmeTheLetters('g-i')) // 'ghi'
console.log(gimmeTheLetters('W-Y')) // 'WXY'

// Longer Uppercase Ranges
console.log(gimmeTheLetters('Q-Z')) // 'QRSTUVWXYZ',     
console.log(gimmeTheLetters('F-O')) // 'FGHIJKLMNO',     
console.log(gimmeTheLetters('C-R')) // 'CDEFGHIJKLMNOPQR'

// Longer Lowercase Ranges
console.log(gimmeTheLetters('h-o')) // 'hijklmno',        
console.log(gimmeTheLetters('e-k')) // 'efghijk',         
console.log(gimmeTheLetters('a-q')) // 'abcdefghijklmnopq'

// Full Alphabet Ranges
console.log(gimmeTheLetters('a-z')) // 'abcdefghijklmnopqrstuvwxyz'
console.log(gimmeTheLetters('A-Z')) // 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'