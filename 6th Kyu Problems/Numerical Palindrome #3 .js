/* Numerical Palindrome #3 
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward.
Examples of numerical palindromes are:

2332
110011
54322345

For a given number num, write a function which returns the number of numerical palindromes within each number. 
For this kata, single digit numbers will NOT be considered numerical palindromes.

Return "Not valid" if the input is not an integer or is less than 0.

palindrome(5) => 0
palindrome(1221) => 2 
palindrome(141221001) => 5  
palindrome(1294) => 0
palindrome("1221") => "Not valid"
*/

const isNumPalindrome = str => str === [...str].reverse().join('');
const palindrome = num => {
    if (!Number.isInteger(num) || num < 0) return 'Not valid';

    num = String(num);
    let count = 0;
    for (let i = 0; i < num.length; i++) {
        for (let j = 2; i + j <= num.length; j++) {
            if (isNumPalindrome(num.slice(i, i + j))) count++;
        }
    }
    return count;
}

console.log(palindrome(2)) // 0
console.log(palindrome(141221001)) // 5
console.log(palindrome(1551)) // 2
console.log(palindrome(13598)) // 0
console.log(palindrome("ACCDDCCA")) // "Not valid"
console.log(palindrome("1551")) // "Not valid"
console.log(palindrome(-4505)) // "Not valid"