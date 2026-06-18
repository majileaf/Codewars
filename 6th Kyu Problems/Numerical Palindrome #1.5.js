/* Numerical Palindrome #1.5
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. 
Examples of numerical palindromes are:

2332
110011
54322345

You'll be given 2 numbers as arguments: (num,s). Write a function which returns an array of s number of 
numerical palindromes that come after num. If num is a palindrome itself, it should be included in the count.

Return "Not valid" instead if any one of the inputs is not an integer or is less than 0.

For this kata, single digit numbers will NOT be considered numerical palindromes.

palindrome(6,4) => [11,22,33,44]
palindrome(59,3) => [66,77,88]
palindrome(101,2) => [101,111]
palindrome("15651",5) => "Not valid" 
palindrome(1221,"8") => "Not valid" 

*/

const checkPalin = n => n > 10 && n == [...String(n)].reverse().join('');
const palindrome = (num, s) => {
    if (typeof num !== 'number' || typeof s !== 'number' || num < 0) return 'Not valid';
    const arr = [];

    while (s > 0) {
        if (checkPalin(num)) {
            arr.push(num);
            s--;
        }
        num++;
    }
    return arr;
}

console.log(palindrome(6,4)) // [11,22,33,44]
console.log(palindrome(75,1)) // [77]
console.log(palindrome(493,0)) // []
console.log(palindrome(0,3)) // [11,22,33]
console.log(palindrome(1219,3)) // [1221, 1331, 1441]
console.log(palindrome(101,2)) // [101,111]
console.log(palindrome(3872,6)) // [3883, 3993, 4004, 4114, 4224, 4334]
console.log(palindrome("ACCDDCCA",3)) // "Not valid"
console.log(palindrome(773,"1551")) // "Not valid"
console.log(palindrome(-4505,15)) // "Not valid"