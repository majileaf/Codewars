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

const isPalindrome = str => str === [...str].reverse().join('');

const longestPalindrome = s => {
    if (s.length < 2) return s.length;

    let palindrome = '';
    let subStr = '';
    for (let i = 0; i < s.length; i++) {
        for (let j = s.length - 1; j > i; j--) {
            subStr = s.slice(i, j + 1);
            if (s[i] === s[j] && isPalindrome(subStr)) {
                if (subStr.length > palindrome.length) palindrome = subStr;
                i = j + 1;
                j--;
            }
        }
    }
    return palindrome.length || 1;
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