/* Isn't that a letter too?
An easier Kata asked for a "truth/false" test whether a string is a normal ASC-II letter.

What about Ç & ç (also called c-cedilla), or à, or many other weird ones? Many of us in the programmer community 
know what it's like to feel excluded, so let's help these letters get the isLetter truthiness they deserve!

Please implement a more inclusive String.prototype.isLetter() (JavaScript) which returns true if given object is any single letter*, 
false otherwise.

*(lower or upper case, normal or extended latin alphabet -- don't worry about really exotic ones, nor say the Chinese symbols)

You do want to cover these: 
https://en.wikipedia.org/wiki/Basic_Latin_(Unicode_block) 
https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)

Notes: This is my first Kata creation, and I only know JavaScript. 
The instructions for other languages would be String#letter? (Ruby), StringUtils.isLetter(String) (Java), letter? (Clojure), 
if someone feels up to the task of implementing them.
*/

//Think outside the box...

String.prototype.isLetter = function() {
    const charCode = this.charCodeAt();
    return this.length === 1 && (
           charCode >= 97  && charCode <= 122 ||
           charCode >= 65  && charCode <= 90  ||
           charCode >= 192 && charCode <= 214 ||
           charCode >= 216 && charCode <= 246 ||
           charCode >= 248 && charCode <= 255 ||
           charCode >= 256 && charCode <= 383
        )
}

console.log("".isLetter()) // false
console.log("b".isLetter()) // true
console.log("Y".isLetter()) // true
console.log("8".isLetter()) // false
console.log("(".isLetter()) // false
console.log("bc".isLetter()) // false
console.log("b|m".isLetter()) // false
console.log("à".isLetter()) // true
console.log("Ç".isLetter()) // true
console.log("Ã".isLetter()) // true
console.log("Č".isLetter()) // true
console.log("ś".isLetter()) // true
console.log("Ů".isLetter()) // true