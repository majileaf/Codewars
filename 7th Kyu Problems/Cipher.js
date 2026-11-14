/* Cipher
This cipher involves taking each character of a string and multiplying their char codes by 6.

For example, encoding Hello World! would result ưɞʈʈʚÀȊʚʬʈɘÆ.

You must write two functions:
encode to encode a given string,
decode to decode a given string.

Should work on empty string too
*/

const charCipher = (string, mod) => [...string].map(e => String.fromCharCode(e.charCodeAt() * mod)).join('');
const encode = str => charCipher(str, 6);
const decode = str => charCipher(str, 1/6);

console.log(encode("Hello World!")) // "ưɞʈʈʚÀȊʚʬʈɘÆ"
console.log(decode("ưɞʈʈʚÀȊʚʬʈɘÆ")) // "Hello World!"