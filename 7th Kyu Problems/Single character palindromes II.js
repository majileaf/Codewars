/* Single character palindromes II
In this Kata, you will check if it is possible to convert a string to a palindrome by changing one character.

For instance:
solve ("abbx") = True, because we can convert 'x' to 'a' and get a palindrome. 
solve ("abba") = False, because we cannot get a palindrome by changing any character. 
solve ("abcba") = True. We can change the middle character. 
solve ("aa") = False 
solve ("ab") = True

Good luck!
*/

const isPalindrome = str => str === [...str].reverse().join('');
const solve = str => {
    if (str.length % 2 !== 0 && isPalindrome(str.slice(0, str.length / 2) + str.slice(str.length / 2 + 1))) return true;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - 1 - i]) return isPalindrome(str.slice(0, i) + str[str.length - 1 - i] + str.slice(i + 1));
    }
    return false;
}

console.log(solve("abba")) // false
console.log(solve("abbaa")) // true
console.log(solve("abbx")) // true
console.log(solve("aa")) // false
console.log(solve("ab")) // true
console.log(solve("abcba")) // true