/*
ROT13 is a simple letter substitution cipher that replaces a letter with the 
letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. 
If there are numbers or special characters included in the string, they should be 
returned as they are. Only letters from the latin/english alphabet should be shifted, 
like in the original Rot13 "implementation".
*/

const rot13 = message => message
    .split('')
    .map(e =>
      e >= 'a' && e <= 'z'
        ? String.fromCharCode(((e.charCodeAt() + 13 - 97) % 26) + 97)
    : e >= 'A' && e <= 'Z'
        ? String.fromCharCode(((e.charCodeAt() + 13 - 65) % 26) + 65)
        : e)
    .join('');

console.log(rot13("test")) // "grfg"
console.log(rot13("Test")) // "Grfg"