/* Apparently-Modifying Strings
For every string, after every occurrence of 'and' and/or 'but', insert the substring 'apparently' directly after the occurrence(s).
If input does not contain 'and' or 'but', return the same string. If a blank string, return ''.
If substring 'apparently' is already directly after an 'and' and/or 'but', do not add another. (Do not add duplicates).

Examples:
Input 1
'It was great and I've never been on live television before but sometimes I don't watch this.'

Output 1
'It was great and apparently I've never been on live television before but apparently sometimes I don't watch this.'

Input 2
'but apparently'

Output 2
'but apparently' 
(no changes because 'apparently' is already directly after 'but' and there should not be a duplicate.)

An occurrence of 'and' and/or 'but' only counts when it is at least one space separated. 
For example 'andd' and 'bbut' do not count as occurrences, whereas 'b but' and 'and d' does count.
*/

const apparently = string => string.replace(/\b(and|but)\b(?! apparently\b)/g, char => char + ' apparently');

// alternatively:
// const apparently = string => string.replace(/\b(and|but)\b(?! apparently\b)/g, '$& apparently');

console.log(apparently('It was great and I have never been on live television before but sometimes I dont watch this.')) 
                    // 'It was great and apparently I have never been on live television before but apparently sometimes I dont watch this.'
console.log(apparently('and')) // 'and apparently'
console.log(apparently('apparently')) // 'apparently'
console.log(apparently('but apparently')) // 'but apparently'
console.log(apparently('and apparently')) // 'and apparently'
console.log(apparently('and apparentlybutactuallynot voilewtfman')) // 'and apparently apparentlybutactuallynot voilewtfman'
console.log(apparently('but the bread and butter apparently brand apparently')) // 'but apparently the bread and apparently butter apparently brand apparently'