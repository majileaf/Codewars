/* Grouped by commas
Finish the solution so that it takes an input n (integer) and returns a string that is 
the decimal representation of the number grouped by commas after every 3 digits.

Assume: 0 <= n <= 2147483647

Examples
       1  ->           "1"
      10  ->          "10"
     100  ->         "100"
    1000  ->       "1,000"
   10000  ->      "10,000"
  100000  ->     "100,000"
 1000000  ->   "1,000,000"
35235235  ->  "35,235,235"
*/

const groupByCommas = n => [...String(n)]
    .reverse()
    .join('')
    .match(/.{1,3}/g)
    .map(e => [...e]
        .reverse()
        .join(''))
    .reverse()
    .join(',');

console.log(groupByCommas(1)) // "1"
console.log(groupByCommas(12)) // "12"
console.log(groupByCommas(123)) // "123"
console.log(groupByCommas(1234)) // "1,234"
console.log(groupByCommas(12345)) // "12,345"
console.log(groupByCommas(123456)) // "123,456"
console.log(groupByCommas(1234567)) //"1,234,567"
console.log(groupByCommas(12345678)) // "12,345,678"
console.log(groupByCommas(123456789)) // "123,456,789"
console.log(groupByCommas(1234567890)) // "1,234,567,890"
console.log(groupByCommas(2147483647)) // "2,147,483,647"
console.log(groupByCommas(0)) // "0"