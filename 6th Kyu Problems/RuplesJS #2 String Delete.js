/* RuplesJS #2: String Delete
You team thanks you for the addition of times for numbers, and because you did such a great job, 
have asked you to write a delete method for the String object.
String.delete()

In Ruby, you can delete characters of a string like so:

"hello".delete("l") -> "heo"

We're going to beef the delete method up a little bit for javascript. 1st, we're going to allow multiple arguments, 
and we're going to accept strings and regular expressions. String arguments will remove all occurences of the substring. 
Unlike the string arguments, Regular Expressions must use the global flag to delete all occurences. 
Invalid arguments should be ignored. Any matches should be removed from the returned string.

Examples:
"1: Are you enjoying this kata?".delete(/[^a-z ]/gi) -> " Are you enjoying this kata"
"1: Are you enjoying this kata?".delete("a", "?", [], /[0-9]/g) -> ": Are you enjoying this kt"

Enjoy!
*/

String.prototype.delete = function(...args) {
    let str = this;
    for (const reg of args) {
        if (typeof reg === 'string') str = str.replace(new RegExp(`${reg}`, 'g'), '');
        else if (typeof reg === 'object') str = str.replace(reg, '');
    }
    return str.toString();
}

// Should work for one string argument:
console.log("Hello World!".delete("ell")) // "Ho World!"
console.log("Hello World!".delete("o")) // "Hell Wrld!"
console.log("Hello World!".delete("w")) // "Hello World!"

// Should work for one RegExp object argument:
console.log("Hello World!".delete(/l/)) //"Helo World!"
console.log("Hello World!".delete(/e/g)) //"Hllo World!"
console.log("Hello World!".delete(/l/g)) //"Heo Word!"
console.log("Hello World!".delete(/[a-z ]/gi)) //"!"

// Should ignore invalid arguments, like numbers:
console.log("Hello World".delete()) // "Hello World"
console.log("Hello World".delete(123)) // "Hello World"
console.log("Hello World 123".delete(123)) // "Hello World 123"

// Should work for multiple mixed arguments:
console.log("Hello World 123".delete(" 123", "l")) // "Heo Word"
console.log("Hello World123".delete(/h/gi, /[0-9]/g)) // "ello World"
console.log("Hello World".delete(1, [], function() { })) // "Hello World"