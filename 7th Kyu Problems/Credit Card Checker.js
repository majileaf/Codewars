/* Credit Card Checker
Description
Write a function that checks whether a credit card number is correct or not, using the Luhn algorithm.

The algorithm is as follows:
    From the rightmost digit, which is the check digit, moving left, double the value of every second digit; 
    if the product of this doubling operation is greater than 9 (e.g., 8 × 2 = 16), then sum the digits of the products 
    (e.g., 16: 1 + 6 = 7, 18: 1 + 8 = 9) or alternatively subtract 9 from the product (e.g., 16: 16 - 9 = 7, 18: 18 - 9 = 9).
    Take the sum of all the digits.
    If the total modulo 10 is equal to 0 (if the total ends in zero) then the number is valid according to the Luhn formula; else it is not valid.

The input is a string with the full credit card number, in groups of 4 digits separated by spaces, i.e. "1234 5678 9012 3456"
Don´t worry about wrong inputs, they will always be a string with 4 groups of 4 digits each separated by space.

Examples
    "5457 6238 9823 4311" --> True
    "5457 6238 9323 4311" --> False

for reference check: https://en.wikipedia.org/wiki/Luhn_algorithm
*/

const validCard = card => card
    .split(' ')
    .join('')
    .split('')
    .map((e, i) => i % 2 === 0 
        ? (e * 2 > 9 ? e * 2 - 9 : e * 2) 
        : +e)
    .reduce((sum, n) => sum + n, 0) % 10 === 0;

console.log(validCard("3333 3333 3333 3331")) // true
console.log(validCard("5457 1111 9323 4311")) // false
console.log(validCard("5457 6238 9323 4311")) // false
console.log(validCard("5457 6238 9823 4311")) // true
console.log(validCard("2222 2222 2222 2224")) // true
console.log(validCard("1234 5678 9012 3452")) // true
console.log(validCard("9999 9999 9999 9995")) // true
console.log(validCard("1252 6238 9323 4311")) // false
console.log(validCard("5457 1125 9323 4311")) // false
console.log(validCard("6666 6666 6666 6664")) // true
console.log(validCard("5457 6238 0254 4311")) // false
console.log(validCard("5457 6238 9323 4311")) // false
console.log(validCard("5457 6238 1251 4311")) // false
console.log(validCard("5457 6238 9323 1252")) // false
console.log(validCard("5457 6238 5568 4311")) // false
console.log(validCard("8888 8888 8888 8888")) // true
console.log(validCard("1145 6238 9323 4311")) // false
console.log(validCard("4444 4444 4444 4448")) // true
console.log(validCard("5458 4444 9323 4311")) // false
console.log(validCard("5457 6238 9823 4311")) // true
console.log(validCard("5457 6238 3333 4311")) // false
console.log(validCard("5555 5555 5555 5557")) // true
console.log(validCard("8895 6238 9323 4311")) // false
console.log(validCard("0123 4567 8901 2345")) // false
console.log(validCard("0000 0000 0000 0000")) // true
console.log(validCard("0025 2521 9323 4311")) // false
console.log(validCard("0000 0300 0000 0000")) // false
console.log(validCard("1111 1111 1111 1117")) // true