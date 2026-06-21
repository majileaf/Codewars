/* Numerical Palindrome #3.5
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. 
Examples of numerical palindromes are: 2332, 110011, 54322345

For a given number num, write a function which returns an array of all the numerical palindromes contained within each number. 
The array should be sorted in ascending order and any duplicates should be removed.

In this kata, single digit numbers and numbers which start or end with zeros (such as 010 and 00) are NOT considered 
valid numerical palindromes.

If num contains no valid palindromes, return "No palindromes found". Otherwise, return "Not valid" if the input is 
not an integer or is less than 0.

Examples
1221      -->  [22, 1221]
34322122  -->  [22, 212, 343, 22122]
1001331   -->  [33, 1001, 1331]
1294      -->  "No palindromes found"
"1221"    -->  "Not valid"
*/

const isNumPalindrome = n => n == [...String(n)].reverse().join('');
const palindrome = num => {
    if (!Number.isInteger(num) || num < 0) return 'Not valid';

    num = String(num);
    const arr = [];
    for (let i = 0; i < num.length; i++) {
        for (let j = 2; i + j <= num.length; j++) {
            const n = +num.slice(i, i + j);
            if (n > 10 && isNumPalindrome(n)) arr.push(n);
        }
    }
    return arr.length ? [...new Set(arr)].sort((a, b) => a - b) : 'No palindromes found';
}

console.log(palindrome(2)) // "No palindromes found"
console.log(palindrome(1551)) // [55,1551]
console.log(palindrome(221122)) // [11,22,2112,221122]
console.log(palindrome(10015885)) // [88,1001,5885]
console.log(palindrome(13598)) // "No palindromes found"
console.log(palindrome("ACCDDCCA")) // "Not valid"
console.log(palindrome("1551")) // "Not valid"
console.log(palindrome(-4505)) // "Not valid"