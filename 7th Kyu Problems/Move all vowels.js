/* Move all vowels
Given a string as input, move all of its vowels to the end of the string, in the same order as they were before.

Vowels are (in this kata): a, e, i, o, u

Note: all provided input strings are lowercase.

Examples
"day"    ==>  "dya"
"apple"  ==>  "pplae"
*/

const moveVowel = input => {
    let vowels = '';
    let str = '';
    for (let i = 0; i < input.length; i++) {
        (/[aeiou]/.test(input[i])) ? vowels += input[i] : str += input[i];
    }
    return str + vowels;
}

console.log(moveVowel("day")) // "dya"
console.log(moveVowel("apple")) // "pplae"
console.log(moveVowel("peace")) // "pceae"
console.log(moveVowel("maker")) // "mkrae"); 