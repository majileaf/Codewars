/* Numerical Palindrome #2 
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. 
Examples of numerical palindromes are:

2332
110011
54322345

For this kata, single digit numbers will not be considered numerical palindromes.

For a given number num, write a function to test if the number contains a numerical palindrome or not and 
return a boolean (true if it does and false if does not). Return "Not valid" if the input is not an integer or is less than 0.

Note: Palindromes should be found without permutating num.

palindrome(5) => false
palindrome(1221) => true
palindrome(141221001) => true
palindrome(1215) => true 
palindrome(1294) => false 
palindrome("109982") => "Not valid"


In Haskell, this returns a Maybe Bool, with Nothing for an input less than zero.
*/

const isNumPalindrome = str => str === [...str].reverse().join('');
const palindrome = num => {
    if (!Number.isInteger(num) || num < 0) return 'Not valid';

    num = String(num);
    for (let i = 0; i < num.length; i++) {
        for (let j = 2; i + j <= num.length; j++) {
            if (isNumPalindrome(num.slice(i, i + j))) return true;
        }
    }
    return false;
}

console.log(palindrome(2)) // false
console.log(palindrome(123322367)) // true
console.log(palindrome(1551)) // true
console.log(palindrome(1215)) // true
console.log(palindrome(13598)) // false
console.log(palindrome("ACCDDCCA")) // "Not valid"
console.log(palindrome("1551")) // "Not valid"
console.log(palindrome(-4505)) // "Not valid"