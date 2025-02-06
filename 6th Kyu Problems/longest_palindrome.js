/* longest_palindrome
Find the length of the longest substring in the given string s that is the same in reverse.
As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.
If the length of the input string is 0, the return value must be 0.

Example:
"a" -> 1 
"aab" -> 2  
"abcde" -> 1
"zzbaabcd" -> 4
"" -> 0
*/

function longestPalindrome(s){
  //your code here
}

console.log(longestPalindrome("a")) // 1
console.log(longestPalindrome("aa")) // 2
console.log(longestPalindrome("baa")) // 2
console.log(longestPalindrome("aab")) // 2
console.log(longestPalindrome("zyabyz")) // 1
console.log(longestPalindrome("BaaBcd")) // 4
console.log(longestPalindrome("baablkj12345432133d")) // 9

console.log(longestPalindrome("")) // 0
console.log(longestPalindrome("Aa")) // 1

console.log(longestPalindrome("Rdn387NN5MXXXxA")) // 3