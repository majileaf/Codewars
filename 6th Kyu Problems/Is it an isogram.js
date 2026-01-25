/* Is it an isogram?
An isogram (also known as a "nonpattern word") is a logological term for a word or phrase without a repeating letter. 
It is also used by some to mean a word or phrase in which each letter appears the same number of times, 
not necessarily just once.

You task is to write a method isogram? that takes a string argument and returns true if the string has the properties of 
being an isogram and false otherwise. Anything that is not a string is not an isogram (ints, nils, etc.)

Properties:
    must be a string
    cannot be nil or empty
    each letter appears the same number of times (not necessarily just once)
    letter case is not important (= case insensitive)
    non-letter characters (e.g. hyphens) should be ignored
*/

const isIsogram = str => {
    if (typeof str !== 'string') return false;
    str = str.toLowerCase().replace(/[^a-z]/g, '');
    if (str === '') return false;

    const count = [...str].reduce((sum, n) => (sum[n] = (sum[n] || 0) + 1, sum), {});
    const min = count[str[0]];
    return Object.keys(count).every(e => count[e] === min);
}

console.log(isIsogram(null)) // false
console.log(isIsogram(3)) // false
console.log(isIsogram("Dermatoglyphics")) // true
console.log(isIsogram("isogram")) // true
console.log(isIsogram("eleven")) // false
console.log(isIsogram("moOse")) // false, "char case is not important"
console.log(isIsogram("isIsogram")) // false
console.log(isIsogram("")) // false, "an empty string is NOT a valid isogram"
console.log(isIsogram("-.-")) // false
console.log(isIsogram("isogram")) // true
console.log(isIsogram("subdermatoglyphic")) // true
console.log(isIsogram("Alphabet")) // false
console.log(isIsogram("thumbscrew-japingly")) // true
console.log(isIsogram("Hjelmqvist-Gryb-Zock-Pfund-Wax")) // true
console.log(isIsogram("Emily Jung Schwartzkopf")) // true
console.log(isIsogram('aabbccddeeffgg')) // true, "each char appears te same number of times, not necessarily just once"