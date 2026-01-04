/* Bracket Duplicates
Create a program that will take in a string as input and, if there are duplicates of more than two alphabetical characters 
in the string, returns the string with all the extra characters in a bracket.

For example, the input "aaaabbcdefffffffg" should return "aa[aa]bbcdeff[fffff]g"

Please also ensure that the input is a string, and return "Please enter a valid string" if it is not.
*/

const stringParse = string => typeof string === 'string' 
    ? string.replace(/(.)\1+/g, char => char.length > 2 
            ? char[0].repeat(2) + '[' + char[0].repeat(char.length - 2) + ']' 
            : char) 
    : 'Please enter a valid string';

console.log(stringParse("aaaabbcdefffffffg")) // "aa[aa]bbcdeff[fffff]g"
console.log(stringParse("boopdedoop")) // "boopdedoop"
console.log(stringParse("helloookat")) // "helloo[o]kat"