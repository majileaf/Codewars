/*
Write simple .camelCase method (camel_case function in PHP, 
CamelCase in C# or camelCase in Java) for strings.

All words must have their first letter capitalized without spaces.

For instance:
"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord
*/

// String.prototype.camelCase = function() {
//     return this.split(' ').map(e => e.length > 0 ? e[0].toUpperCase() + e.slice(1) : e).join('');
// }

String.prototype.camelCase = function() {
    return this.split(' ').map(e => e.slice(0, 1).toUpperCase() + e.slice(1)).join('');
}

console.log("test case".camelCase()) // "TestCase"
console.log("camel case method".camelCase()) // "CamelCaseMethod"
console.log("say hello ".camelCase()) // "SayHello"
console.log(" camel case word".camelCase()) // "CamelCaseWord"
console.log("".camelCase()) // ""