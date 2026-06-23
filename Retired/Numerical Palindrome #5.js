/* Numerical Palindrome #5
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. 
Examples of numerical palindromes are:

    232
    110011
    54322345

Complete the function to test if the given number (num) can be rearranged to form a numerical palindrome or not. 
Return a boolean (true if it can be rearranged to a palindrome, and false if it cannot). 
Return "Not valid" if the input is not an integer or is less than 0.

For this kata, single digit numbers are NOT considered numerical palindromes.

Examples
5        =>  false
2121     =>  true
1331     =>  true 
3357665  =>  true 
1294     =>  false 
"109982" =>  "Not valid"
-42      =>  "Not valid"
*/

const palindrome = num => {
    if (!Number.isInteger(num) || num < 0) return 'Not valid';
    const count = [...String(num)].reduce((sum, n) => (sum[n] = (sum[n] || 0) + 1, sum), {});
    return num > 9 && Object.values(count).reduce((sum, n) => sum + n % 2, 0) < 2;
}

console.log(palindrome(1212)) // true
console.log(palindrome(89698)) // true
console.log(palindrome(7653356)) // true
console.log(palindrome(100134)) // false
console.log(palindrome(13598)) // false
console.log(palindrome("ACCDDCCA")) // "Not valid"
console.log(palindrome("1212")) // "Not valid"
console.log(palindrome(-4505)) // "Not valid"
console.log(palindrome(7)) // false