/*
In this kata you should simply determine, whether a given year is 
a leap year or not. In case you don't know the rules, here they are:

years divisible by 4 are leap years
but years divisible by 100 are not leap years
but years divisible by 400 are leap years

Additional Notes:
Only valid years (positive integers) will be tested, so you don't 
have to validate them
*/

const isLeapYear = year => {
    switch(true) {
        case (year % 400 === 0): return true;
        case (year % 100 === 0): return false;
        case (year % 4 === 0): return true;
        default: return false;
    }
}

console.log(isLeapYear(1234)) // false
console.log(isLeapYear(1984)) // true
console.log(isLeapYear(2000)) // true
console.log(isLeapYear(2010)) // false
console.log(isLeapYear(2013)) // false