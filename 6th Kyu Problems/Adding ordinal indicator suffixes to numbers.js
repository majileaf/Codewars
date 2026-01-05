/* Adding ordinal indicator suffixes to numbers
Complete the function which should take a number and return it as a string with the correct ordinal indicator suffix 
(in English). That is:

     1 ==> "1st"
     2 ==> "2nd"
     3 ==> "3rd"
     4 ==> "4th"
    ... and so on

For the purposes of this kata, you may assume that the function will always be passed a non-negative integer. 
If the function is given 0 as an argument, it should return "0" (as a string).

To help you get started, here is an excerpt from Wikipedia's page on Ordinal Indicators:
    st is used with numbers ending in 1 (e.g. 1st, pronounced first)
    nd is used with numbers ending in 2 (e.g. 92nd, pronounced ninety-second)
    rd is used with numbers ending in 3 (e.g. 33rd, pronounced thirty-third)
    As an exception to the above rules, all the "teen" numbers ending with 11, 12 or 13 use -th (e.g. 11th, 
        pronounced eleventh, 112th, pronounced one hundred [and] twelfth)
    th is used for all other numbers (e.g. 9th, pronounced ninth).
*/

const numberToOrdinal = n => {
    switch(true) {
        case (n === 0):                          return  '0';
        case ((n % 100) > 10 && (n % 100) < 14): return `${n}th`;
        case (n % 10 === 1):                     return `${n}st`;
        case (n % 10 === 2):                     return `${n}nd`;
        case (n % 10 === 3):                     return `${n}rd`;
        default:                                 return `${n}th`;
    }
}

console.log(numberToOrdinal(0)) // '0'
console.log(numberToOrdinal(1)) // '1st'
console.log(numberToOrdinal(2)) // '2nd'
console.log(numberToOrdinal(3)) // '3rd'
console.log(numberToOrdinal(4)) // '4th'
console.log(numberToOrdinal(5)) // '5th'
console.log(numberToOrdinal(6)) // '6th'
console.log(numberToOrdinal(7)) // '7th'
console.log(numberToOrdinal(8)) // '8th'
console.log(numberToOrdinal(9)) // '9th'
console.log(numberToOrdinal(10)) // '10th'
console.log(numberToOrdinal(11)) // '11th'
console.log(numberToOrdinal(12)) // '12th'
console.log(numberToOrdinal(13)) // '13th'
console.log(numberToOrdinal(14)) // '14th'
console.log(numberToOrdinal(15)) // '15th'
console.log(numberToOrdinal(16)) // '16th'
console.log(numberToOrdinal(17)) // '17th'
console.log(numberToOrdinal(18)) // '18th'
console.log(numberToOrdinal(19)) // '19th'
console.log(numberToOrdinal(20)) // '20th'
console.log(numberToOrdinal(21)) // '21st'
console.log(numberToOrdinal(22)) // '22nd'
console.log(numberToOrdinal(23)) // '23rd'
console.log(numberToOrdinal(24)) // '24th'