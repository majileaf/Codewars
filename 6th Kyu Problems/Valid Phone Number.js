/*
Write a function that accepts a string, and returns true 
if it is in the form of a phone number.

Assume that any integer from 0-9 in any of the spots will 
produce a valid phone number.   

Only worry about the following format:
(123) 456-7890 (don't forget the space after the close parentheses)

Examples:
"(123) 456-7890"  => true
"(1111)555 2345"  => false
"(098) 123 4567"  => false
*/

const checkNum = n => n == parseFloat(n) && n >= 0 && n <= 9;

const validPhoneNumber = phoneNumber => {
    if (phoneNumber.length !== 14) return false;

    const phoneArr = ['(', , , , ')', ' ', , , , '-', , , , ];

    for (let i = 0; i < phoneNumber.length; i++) {
        if (!(phoneNumber[i] === phoneArr[i] || checkNum(phoneNumber[i]))) return false;
    }
    return true;
}

console.log(validPhoneNumber("(123) 456-7890")) // true
console.log(validPhoneNumber("(1111)555 2345")) // false
console.log(validPhoneNumber("(098) 123 4567")) // false