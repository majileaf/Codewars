/* Trim a String
Define a function trim (JavaScript: method String.prototype.trim) which removes all forms of leading and trailing whitespace 
from a given string. Please refer to the Sample Tests for more examples.

Note: The built-in trim, trimLeft && trimRight methods has been disabled.
*/

String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, '');
};

console.log("foo      ".trim()) // "foo", "trailing spaces"
console.log("      foo".trim()) // "foo", "leading spaces"
console.log("      foo      ".trim()) // "foo", "leading and trailing spaces"
console.log("foo    bar".trim()) // "foo    bar", "spaces in between"
console.log("    ".trim()) // "", "only spaces"