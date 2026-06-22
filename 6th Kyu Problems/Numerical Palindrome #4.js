/* Numerical Palindrome #4
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. 
Examples of numerical palindromes are:

2332
110011
54322345

For a given number num, return its closest numerical palindrome which can either be smaller or larger than num. 
If there are 2 possible values, the larger value should be returned. If num is a numerical palindrome itself, return it.

For this kata, single digit numbers will NOT be considered numerical palindromes.

Also, you know the drill - be sure to return "Not valid" if the input is not an integer or is less than 0.

palindrome(8) => 11
palindrome(281) => 282 
palindrome(1029) => 1001
palindrome(1221) => 1221
palindrome("1221") => "Not valid"
*/

const isNumPalindrome = n => n > 9 && n == [...String(n)].reverse().join('');
const palindrome = num => {
    if (!Number.isInteger(num) || num < 0) return 'Not valid';

    let [left, right] = [0, 0];
    let i = 0;

    while (num - i > 9 || !left && !right) {
        if (!left && isNumPalindrome(num - i)) left = num - i;
        if (!right && isNumPalindrome(num + i)) right = num + i;
        i++;
    }
    return [left, right].sort((a, b) => Math.abs(num - a) - Math.abs(num - b) || b - a)[0];
}

console.log(palindrome(8)) // 11
console.log(palindrome(281)) // 282
console.log(palindrome(1029)) // 1001
console.log(palindrome(1221)) // 1221
console.log(palindrome("BGHHGB")) // "Not valid"
console.log(palindrome("11029")) // "Not valid"
console.log(palindrome(-1029)) // "Not valid"