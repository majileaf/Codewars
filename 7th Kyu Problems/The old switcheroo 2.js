/* The old switcheroo 2
Write the function :
function encode(str)
that takes in a string str and replaces all the letters with their respective positions in the English alphabet.

encode('abc') == '123'   // a is 1st in English alpabet, b is 2nd and c is 3rd
encode('codewars') == '315452311819'
encode('abc-#@5') == '123-#@5'
String are case sensitive.

// Bonus point if you don't use toLowerCase()
*/

const encode = str => [...str]
    .map(e => 
          e >= 'a' && e <= 'z' ? e.charCodeAt() - 96 
        : e >= 'A' && e <= 'Z' ? e.charCodeAt() - 64 
        : e)
    .join('');

// alternatively:
// const encode = str => str.replace(/[a-z]/gi, char => char.charCodeAt() - (char.charCodeAt() > 96 ? 96 : 64));

console.log(encode('abc')) // '123'
console.log(encode('ABCD')) // '1234'
console.log(encode('ZzzzZ')) // '2626262626'
console.log(encode('abc-#@5')) // '123-#@5'