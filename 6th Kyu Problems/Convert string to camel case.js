/*
Complete the method/function so that it converts dash/underscore 
delimited words into camel casing. The first word within the output 
should be capitalized only if the original word was capitalized 
(known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/

// initial solution:
// const toCamelCase = str => {
//     if (str.length < 2) return str;
//     let split = '';
//     if (str.includes('-')) split = str.split('-');
//     if (str.includes('_')) split = str.split('_');
    
//     return split.map((word, i) => i > 0 ? word[0].toUpperCase() + word.slice(1) : word).join('');
// }

const toCamelCase = str => str
    .split(str.includes('-') ? '-' : '_')
    .map((word, i) => i > 0 ? word[0].toUpperCase() + word.slice(1) : word)
    .join('');

console.log(toCamelCase('')) // ''
console.log(toCamelCase("the_stealth_warrior")) // "theStealthWarrior"
console.log(toCamelCase("The-Stealth-Warrior")) // "TheStealthWarrior"
console.log(toCamelCase("A-B-C")) // "ABC"