/* Character counts
The object is to count the number of occurances of a specified character (or set of characters) in a string.
Instructions

Complete the placeholder function characterCount.

    it should return the number of times a single character appears in the string, or
    if multiple characters are specified (either by providing an array or string of length 2 or more), 
    it should return an array of character counts
    see the unit tests provided for a more comprehensive definition

NOTE: The tests assume that if no arguments are provided to the function (i.e. ''.characterCount()), then the result is undefined.
*/

/**
 * Returns the number of times the given character appears in the string,
 * or if more than one character is supplied an array of character counts.
 */
String.prototype.characterCount = function (charsToCount) {
    if (!this.length) return undefined;
    const count = this.split('').reduce((sum, n) => (sum[n] = (sum[n] || 0) + 1, sum), {});
    return charsToCount.length === 1        ? count[charsToCount] || 0 : 
           typeof charsToCount === 'string' ? charsToCount.split('').map(e => count[e] || 0) :
           Array.isArray(charsToCount)      ? charsToCount.map(e => count[e] || 0) : undefined;
};

// should return `undefined` when no characters are specified to count
console.log(''.characterCount()) // undefined, 'Calling `characterCount` with no arguments is undefined'

// should return the number of times the given character appears in the string
console.log('lol'.characterCount('l')) // 2

// should return the number of times each given character appears in the string when more than 1 is provided
console.log('booop-booop-deee-doo-dooop'.characterCount('ado')) // [0,3,11]

// should return the number of times each given character appears in the string, even when duplicates are provided
console.log('booop-booop-deee-doo-dooop'.characterCount(['a','d','o','o','d','a'])) // [0,3,11,11,3,0]