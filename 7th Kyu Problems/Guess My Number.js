/* Guess My Number
Your goal is to create a function that takes a guess (string) and optionally a phone number (string).

Based on the guess, your function should display only the matching digits in the phone number, 
and hide the other digits with #:

guess = "052"
number = "123-451-2345"
// would return the string: "#2#-#5#-2##5"
    
guess = "142"
number = "123-451-2345"
// would return the string: "12#-4#1-2#4#"

The guess is a string of containing unordered and distinct digits (0-9). 
It will never be empty and will never contains any other characters.

The phone number will always be a ten digit number in the format ###-###-####. 
If no phone number is supplied, 123-451-2345 should be used as the default.
*/

const guessMyNumber = (guess, number = '123-451-2345') => number.replace(new RegExp(`[^-${guess}]`, 'g'), digit => '#');

console.log(guessMyNumber('0')) // '###-###-####'
console.log(guessMyNumber('01')) // '1##-##1-####'
console.log(guessMyNumber('012')) // '12#-##1-2###'
console.log(guessMyNumber('0123')) // '123-##1-23##'
console.log(guessMyNumber('01234')) // '123-4#1-234#'
console.log(guessMyNumber('012345')) // '123-451-2345'
console.log(guessMyNumber('012345', '123-456-7899')) // '123-45#-####'
console.log(guessMyNumber('01245', '103-456-7899')) // '10#-45#-####'
console.log(guessMyNumber('052', '123-451-2345')) // '#2#-#5#-2##5'
console.log(guessMyNumber('142', '123-451-2345')) // '12#-4#1-2#4#'