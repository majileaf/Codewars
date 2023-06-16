/* You Complete Me
Task: concatenate one or more letters to the end of a given input string to create a string that 
reads the same forward as backward.

Specifications
Letters can only be added to the right hand side of the input string.
You are required to add at least one letter to the input string.
The shorter return string is the correct one. ie.. (ab)=> abba is Wrong, while (ab)=> aba is Right.
Inputs will consist of one or more letters, upper and lower case.
Strings are case sensitive. ie..(Gn)=> gng is Wrong, while (Gn)=> GnG is right.

Examples:
(a) => a + a => aa
(GG) => GG + G => GGG
(Ab) => Ab + A => AbA
(aba) => aba + ba => ababa
(aab) => aab + aa => aabaa
*/

const complete = str =>{
    let palindrome = '';
    for (let i = 0; i <= str.length; i++) {
        palindrome = str + [...str.slice(0, i + 1)].reverse().join('');
        if (checkPalindrome(palindrome)) return palindrome;
    }
} 

const checkPalindrome = str => str === str.split('').reverse().join('');

console.log(complete("Baa")) // "BaaB"
console.log(complete("aaB")) // "aaBaa"
console.log(complete("x")) // "xx"
console.log(complete("aaBB")) // "aaBBaa"
console.log(complete("aOOa")) // "aOOaOOa"
console.log(complete("xyz")) // "xyzyx"
console.log(complete("AaaaA")) // "AaaaAaaaA"
console.log(complete("abab")) // "ababa"