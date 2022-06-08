/*
The input is a string str of digits. Cut the string into chunks 
(a chunk here is a substring of the initial string) of size sz 
(ignore the last chunk if its size is less than sz).

If a chunk represents an integer such as the sum of the cubes of 
its digits is divisible by 2, reverse that chunk; otherwise rotate 
it to the left by one position. Put together these modified chunks 
and return the result as a string.

If
sz is <= 0 or if str is empty return ""
sz is greater (>) than the length of str it is impossible to take a 
chunk of size sz hence return "".

Examples:
revrot("123456987654", 6) --> "234561876549"
revrot("123456987653", 6) --> "234561356789"
revrot("66443875", 4) --> "44668753"
revrot("66443875", 8) --> "64438756"
revrot("664438769", 8) --> "67834466"
revrot("123456779", 8) --> "23456771"
revrot("", 8) --> ""
revrot("123456779", 0) --> "" 
revrot("563000655734469485", 4) --> "0365065073456944"

Example of a string rotated to the left by one position:
s = "123456" gives "234561".
*/

// initial solution:
// const convertChunk = str => 
//     [...str].reduce((sum, n) => sum + n ** 3, 0) % 2 === 0 
//         ? str.split('').reverse().join('') 
//         : str.slice(1) + str[0];

// const revrot = (str, sz) => {
//     if (sz <= 0 || !str.length || sz > str.length) return '';
    
//     return [...Array(Math.floor(str.length / sz))]
//         .map((_, i) => convertChunk(str.slice(sz * i, sz * (i + 1))))
//         .join('');
// }

// sum of cubes % 2 === 0 <=> sum % 2 === 0
const convertChunk = str => 
    [...str].reduce((sum, n) => sum + n, 0) % 2 === 0 
        ? str.split('').reverse().join('') 
        : str.slice(1) + str[0];

const revrot = (str, sz) => {
    if (sz <= 0 || !str.length || sz > str.length) return '';

    return [...Array(Math.floor(str.length / sz))]
        .map((_, i) => convertChunk(str.slice(sz * i, sz * (i + 1))))
        .join('');
}

console.log(revrot("123456987654", 6)) // --> "234561876549"
console.log(revrot("123456987653", 6)) // --> "234561356789"
console.log(revrot("66443875", 4)) // --> "44668753"
console.log(revrot("66443875", 8)) // --> "64438756"
console.log(revrot("664438769", 8)) // --> "67834466"
console.log(revrot("123456779", 8)) // --> "23456771"
console.log(revrot("", 8)) // --> ""
console.log(revrot("123456779", 0)) // --> "" 
console.log(revrot("563000655734469485", 4)) // --> "0365065073456944"