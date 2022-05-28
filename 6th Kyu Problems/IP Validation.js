/*
Write an algorithm that will identify valid IPv4 addresses 
in dot-decimal format. IPs should be considered valid if they 
consist of four octets, with values between 0 and 255, inclusive.

Valid inputs examples:
Examples of valid inputs:
1.2.3.4
123.45.67.89

Invalid input examples:
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089

Notes:
Leading zeros (e.g. 01.02.03.04) are considered invalid
Inputs are guaranteed to be a single string
*/

const isValidNum = num => {
    if (num.length < 1 || num.length > 3) return false;
    if (num.length >= 2 && num[0] == 0) return false;

    const numObj = {
        0: true, 1: true, 2: true, 3: true, 4: true, 5: true, 
        6: true, 7: true, 8: true, 9: true
    };
    return num.split('').every(e => numObj[e]) && num >= 0 && num <= 255;
}

const isValidIP = str => {
    let arr = str.split('.');
    return arr.length === 4 && arr.every(e => isValidNum(e));
}

// alternatively:
// const isValidIP = str => {
//     const arr = str.split('.');
//     return arr.length === 4 && arr.every(n => n === String(Number(n)) && n >= 0 && n <= 255);
// }

console.log(isValidIP("0.0.0.0")) // true
console.log(isValidIP("12.255.56.1")) // true
console.log(isValidIP("137.255.156.100")) // true
console.log(isValidIP('')) // false
console.log(isValidIP('abc.def.ghi.jkl')) // false
console.log(isValidIP('123.456.789.0')) // false
console.log(isValidIP('12.34.56')) // false
console.log(isValidIP('01.02.03.04')) // false
console.log(isValidIP('256.1.2.3')) // false
console.log(isValidIP('1.2.3.4.5')) // false
console.log(isValidIP('123,45,67,89')) // false
console.log(isValidIP('1e0.1e1.1e2.2e2')) // false
console.log(isValidIP(' 1.2.3.4')) // false
console.log(isValidIP('1.2.3.4 ')) // false
console.log(isValidIP('12.34.56.-7')) // false
console.log(isValidIP('1.2.3.4\n')) // false
console.log(isValidIP('\n1.2.3.4')) // false