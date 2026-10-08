/* Validate credit card expiry date
It is a simple, real world task. You will receive a single string as input. 
It will have the month (2 digits) and year(2 or 4 digits). 
These are separated by one character ("-" or "/", maybe some spaces too). 

For example:
    02/21
    02 / 21
    02 / 2021
    02-2021

Assume that all dates are in the XXI century.

Your task is to write a function that returns true or false if the expiry date is not in the past. 
Note, current month should still return true.

Good luck.
*/

const checkExpiryValid = date => {
    const [expMonth, expYear] = date.split(/[^\d]+/);
    const expDate = new Date(expYear.padStart(4, '20'), expMonth, 0);
    const currDate = new Date();
    return expDate.getTime() >= currDate.getTime();
}

console.log(checkExpiryValid('02/21')) // false
console.log(checkExpiryValid('02 / 21')) // false
console.log(checkExpiryValid('02 / 2021')) // false
console.log(checkExpiryValid('02-2021')) // false

console.log(checkExpiryValid('03/15')) // false
console.log(checkExpiryValid('03/33')) // true
console.log(checkExpiryValid('03-15')) // false
console.log(checkExpiryValid('03 / 15')) // false
console.log(checkExpiryValid('03-2015')) // false