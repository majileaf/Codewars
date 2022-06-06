/* Encrypt this!
You want to create secret messages which can be deciphered by the 
Decipher this! kata. (https://www.codewars.com/kata/decipher-this)

Here are the conditions:
Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
    The first letter must be converted to its ASCII code.
    The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.

Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/

const encryptThis = text =>
  text
    .split(' ')
    .map(e =>
      e.length === 1
        ? e.charCodeAt()
    : e.length === 2
        ? e.charCodeAt() + e[1]
        : e.charCodeAt() + e.slice(-1) + e.slice(2, -1) + e.slice(1, 2)
    )
    .join(' ');

console.log(encryptThis("A")) // "65"
console.log(encryptThis("A wise old owl lived in an oak")) // "65 119esi 111dl 111lw 108dvei 105n 97n 111ka"
console.log(encryptThis("The more he saw the less he spoke")) // "84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp"
console.log(encryptThis("The less he spoke the more he heard")) // "84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare"
console.log(encryptThis("Why can we not all be like that wise old bird")) // "87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri"
console.log(encryptThis("Thank you Piotr for all your help")) // "84kanh 121uo 80roti 102ro 97ll 121ruo 104ple"