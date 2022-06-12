/* First non-repeating character
Write a function named first_non_repeating_letter that takes a string input, 
and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', 
since the letter t only occurs once in the string, and occurs first in the 
string.

As an added challenge, upper- and lowercase letters are considered the same 
character, but the function should return the correct case for the initial 
letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty 
string ("") or None -- see sample tests.
*/

const firstNonRepeatingLetter = s => (idx = [...s.toLowerCase()]
    .map(e => s.length - s.toLowerCase().split(e).join('').length)
    .indexOf(1)) !== -1 
        ? s[idx] 
        : "";

console.log(firstNonRepeatingLetter('cda')) // 'c'
console.log(firstNonRepeatingLetter('ccda')) // 'd'
console.log(firstNonRepeatingLetter('abba')) // ''
console.log(firstNonRepeatingLetter('aa')) // ''
console.log(firstNonRepeatingLetter('')) // ''

console.log(firstNonRepeatingLetter('a')) // 'a'
console.log(firstNonRepeatingLetter('stress')) // 't'
console.log(firstNonRepeatingLetter('sTress')) // 'T'
console.log(firstNonRepeatingLetter('moonmen')) // 'e'