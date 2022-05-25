/*
Complete the solution so that the function will break up camel casing, 
using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

const solution = string => string.split('').map((e, i, arr) => e === e.toUpperCase() ? arr[i] = " " + e : e).join('');

console.log(solution('camelCasing')) // 'camel Casing'
console.log(solution('camelCasingTest')) // 'camel Casing Test'