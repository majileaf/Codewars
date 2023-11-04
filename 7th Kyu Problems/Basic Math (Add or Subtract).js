/* Basic Math (Add or Subtract)
In this kata, you will do addition and subtraction on a given string. 
The return value must be also a string.

Note: the input will not be empty.

Examples
"1plus2plus3plus4"  --> "10"
"1plus2plus3minus4" -->  "2"
*/

const calculate3 = str => str
    .split('plus')
    .reduce((sum, n) => sum + (Number.isInteger(Number(n)) 
        ? Number(n) 
        : n.split('minus').reduce((sum, n, i) => sum + (i > 0 ? -Number(n) : Number(n)), 0))
    , 0)
    .toString();

// alternatively #1:
// const calculate3 = str => str
//     .replace(/plus/g, ' ')
//     .replace(/minus/g, ' -')
//     .split(' ')
//     .reduce((sum, n) => sum + Number(n), 0)
//     .toString();

// alternatively #2:
// const calculate3 = str => str
//     .split('plus')
//     .join(' ')
//     .split('minus')
//     .join(' -')
//     .split(' ')
//     .reduce((sum, n) => sum + Number(n), 0)
//     .toString();

console.log(calculate("1plus2plus3plus4")) // '10'
console.log(calculate('1minus2minus3minus4')) // '-8'
console.log(calculate('1plus2plus3minus4')) // '2'