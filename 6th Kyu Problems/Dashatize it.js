/*
Given a variable n,

If n is an integer, Return a string with dash'-'marks before and 
after each odd integer, but do not begin or end the string with 
a dash mark. If n is negative, then the negative sign should be removed.

If n is not an integer, return an empty value.

Ex:
dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5'
*/

const dashatize = num => Number.isInteger(num) 
    ? [...String(Math.abs(num))]
        .reduce((sum, n, i, arr) => sum + (n % 2 !== 0
            ? arr[i - 1] % 2 !== 0
                ? i !== arr.length - 1
                    ? `${n}-`
                    : `${n}`
                : i !== arr.length - 1
                    ? `-${n}-`
                    : `-${n}`
            : n), "")
    : 'NaN';

// alternatively:
// const dashatize = num => num
//     .toString()
//     .split('')
//     .map(e => (e % 2 ? '-' + e + '-' : e))
//     .join('')
//     .split('-')
//     .filter(e => e !== '')
//     .join('-');

console.log(dashatize(274)) // "2-7-4"
console.log(dashatize(5311)) // "5-3-1-1"
console.log(dashatize(86320)) // "86-3-20"
console.log(dashatize(974302)) // "9-7-4-3-02"
console.log(dashatize(NaN)) // "NaN"
console.log(dashatize(0)) // "0"
console.log(dashatize(-1)) // "1"
console.log(dashatize(-28369)) // "28-3-6-9"