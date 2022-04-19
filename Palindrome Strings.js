/*
Palindrome strings
A palindrome is a word, phrase, number, or other sequence of characters 
which reads the same backward or forward. This includes capital letters, 
punctuation, and word dividers.

Implement a function that checks if something is a palindrome. 
If the input is a number, convert it to string first.

Examples
isPalindrome("anna")   ==> true
isPalindrome("walter") ==> false
isPalindrome(12321)    ==> true
isPalindrome(123456)   ==> false
*/

const isPalindrome = line => line == line.toString().split('').reverse().join('');

console.log(isPalindrome("anna")) //  true
console.log(isPalindrome("walter")) //  false
console.log(isPalindrome(12321)) //  true
console.log(isPalindrome(123456)) //  false
console.log(isPalindrome(".")) //  true
console.log(isPalindrome(".!!.")) //  true