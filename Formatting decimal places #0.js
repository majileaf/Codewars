/*
Each number should be formatted that it is rounded to two decimal places.
You don't need to check whether the input is a valid number because only
valid numbers are used in the tests.

Example:    
5.5589 is rounded 5.56   
3.3424 is rounded 3.34
*/

const twoDecimalPlaces = n => Math.round(n * 100) / 100;

// alternatively:
// const twoDecimalPlaces = n => +n.toFixed(2);

console.log(twoDecimalPlaces(4.659725356)) //  4.66
console.log(twoDecimalPlaces(173735326.3783732637948948)) //  173735326.38
console.log(twoDecimalPlaces(4.653725356)) //  4.65
console.log(twoDecimalPlaces(-49.70958292977423)) // -49.71
console.log(twoDecimalPlaces(96.61511002862211)) // 96.62
console.log(twoDecimalPlaces(-125.23705122179236)) // -125.24
console.log(twoDecimalPlaces(-123.456)) // -123.46
console.log(twoDecimalPlaces(-12.3456)) // -12.34
console.log(twoDecimalPlaces(-1.23456)) // -1.23
console.log(twoDecimalPlaces(-0.123456)) // -0.12
console.log(twoDecimalPlaces(125.23705122179236)) // -125.24
console.log(twoDecimalPlaces(123.456)) // 123.46
console.log(twoDecimalPlaces(12.3456)) // 12.34
console.log(twoDecimalPlaces(1.23456)) // 1.23
console.log(twoDecimalPlaces(0.123456)) // 0.12