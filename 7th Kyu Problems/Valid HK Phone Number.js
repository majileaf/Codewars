/* Valid HK Phone Number
Overview
In Hong Kong, a valid phone number has the format xxxx xxxx where x is a decimal digit (0-9). For example:

"1234 5678" // is valid
"2359 1478" // is valid
"85748475" // invalid, as there are no spaces separating the first 4 and last 4 digits
"3857  4756" // invalid; there should be exactly 1 whitespace separating the first 4 and last 4 digits respectively
"sklfjsdklfjsf" // clearly invalid
"     1234 5678   " // is NOT a valid phone number but CONTAINS a valid phone number
"skldfjs287389274329dklfj84239029043820942904823480924293042904820482409209438dslfdjs9345 8234sdklfjsdkfjskl28394723987jsfss2343242kldjf23423423SDLKFJSLKsdklf" // also contains a valid HK phone number (9345 8234)
Task
Define two functions, isValidHKPhoneNumber and hasValidHKPhoneNumber, that returns whether a given string is a valid HK phone number and contains a valid HK phone number respectively (i.e. true/false values).
*/

// TODO: Define the two functions
const isValidHKPhoneNumber = str => /^\d{4} \d{4}$/.test(str);
const hasValidHKPhoneNumber = str => /\d{4} \d{4}/.test(str);

console.log(isValidHKPhoneNumber("1234 5678")) // true
console.log(isValidHKPhoneNumber("2359 1478")) // true
console.log(isValidHKPhoneNumber("85748475")) // false
console.log(isValidHKPhoneNumber("3857  4756")) // false
console.log(isValidHKPhoneNumber("sklfjsdklfjsf")) // false
console.log(isValidHKPhoneNumber("     1234 5678   ")) // false

console.log(hasValidHKPhoneNumber("Hello, my phone number is 1234 5678")) // true
console.log(hasValidHKPhoneNumber("I wonder if 2359 1478 is a valid phone number?")) // true
console.log(hasValidHKPhoneNumber("85748475 is definitely invalid")) // false
console.log(hasValidHKPhoneNumber("'3857  4756' is so close to a valid phone number!")) // false
console.log(hasValidHKPhoneNumber("sklfjsdklfjsf")) // false
console.log(hasValidHKPhoneNumber("     1234 5678   ")) // true