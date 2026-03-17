/* Count Repeats
Write a function that returns the count of characters that have to be removed in order to get a string with no consecutive repeats.

Note: This includes any characters

Examples
'abbbbc'  => 'abc'    #  answer: 3
'abbcca'  => 'abca'   #  answer: 2
'ab cca'  => 'ab ca'  #  answer: 1
*/

const countRepeats = str => str.length - str.replace(/(.)\1+/g, char => char[0]).length;

console.log(countRepeats('AABCCD')) // 2
console.log(countRepeats('AABCCDA')) // 2
console.log(countRepeats('AaBBCCC')) // 3