/* Compare Strings by Sum of Chars
Compare two strings by comparing the sum of their values (ASCII character code).

For comparing treat all letters as UpperCase
null/NULL/Nil/None should be treated as empty strings
If the string contains other characters than letters, treat the whole string as it would be empty
Your method should return true, if the strings are equal and false if they are not equal.

Examples:
"AD", "BC"  -> equal
"AD", "DD"  -> not equal
"gf", "FG"  -> equal
"zz1", ""   -> equal (both are considered empty)
"ZzZz", "ffPFF" -> equal
"kl", "lz"  -> not equal
null, ""    -> equal
*/

const compare = (s1, s2) => {
    // if (s1 === s2) return true;
    if ((s1?.length || 0) === 0) s1 = '';
    if ((s2?.length || 0) === 0) s2 = '';

    return counting(s1) === counting(s2);
}

const counting = string => {
    string = string.toUpperCase();
    let sum = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i] >= 'A' && string[i] <= 'Z') {
            sum += string[i].charCodeAt();
        } else {
            sum = 0;
            break;
        }
    }
    return sum;
}

console.log(compare("AD", "BC")) // true
console.log(compare("AD", "DD")) // false
console.log(compare("gf", "FG")) // true
console.log(compare("Ad", "DD")) // false
console.log(compare("zz1", "")) // true
console.log(compare("ZzZz", "ffPFF")) // true
console.log(compare("kl", "lz")) // false
console.log(compare("!!", "7476")) // true
console.log(compare("##", "1176")) // true

console.log(compare(null, "BC")) // false
console.log(compare(null, null)) // true
console.log(compare(null, "")) // true
console.log(compare("", "")) // true);)) 