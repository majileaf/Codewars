/*
Given a string, capitalize the letters that occupy even indexes and 
odd indexes separately, and return as shown below. 

Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. 
See test cases for more examples.

The input will be a lowercase string with no spaces.
*/

const capitalize = s => {
    let left = [];
    let right = [];

    s.split('').map((e, i) => {
        if (i % 2 === 0) {
            left.push(e.toUpperCase());
            right.push(e.toLowerCase());
        } else {
            left.push(e.toLowerCase());
            right.push(e.toUpperCase());
        }
    });
    
    return [left.join(''), right.join('')];
}

console.log(capitalize("abcdef")) // ['AbCdEf', 'aBcDeF']
console.log(capitalize("codewars")) // ['CoDeWaRs', 'cOdEwArS']
console.log(capitalize("abracadabra")) // ['AbRaCaDaBrA', 'aBrAcAdAbRa']
console.log(capitalize("codewarriors")) // ['CoDeWaRrIoRs', 'cOdEwArRiOrS']