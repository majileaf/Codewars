/* Regexp Basics - is it all whitespace?
Implement String#whitespace?(str) (Ruby), String.prototype.whitespace(str) (JavaScript), 
String::whitespace(str) (CoffeeScript), or whitespace(str) (Python), which should return 
true/True if given object consists exclusively of zero or more whitespace characters, 
false/False otherwise.
*/

String.prototype.whitespace = function() {
  return /^\s*$/.test(this);
}

console.log("".whitespace()) // true
console.log(" ".whitespace()) // true
console.log("\n\r\n\r".whitespace()) // true
console.log("a".whitespace()) // false
console.log("w\n".whitespace()) // false
console.log("\t".whitespace()) // true
console.log(" a\n".whitespace()) // false
console.log("\t \n\r\n  ".whitespace()) // true
console.log("\n\r\n\r ".whitespace()) // true
console.log("\n\r\n\r 3".whitespace()) // false
