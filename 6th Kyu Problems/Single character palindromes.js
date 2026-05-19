/* Single character palindromes
You will be given a string and you task is to check if it is possible to convert that string into a palindrome 
by removing a single character. If the string is already a palindrome, return "OK".
If it is not, and we can convert it to a palindrome by removing one character, then return "remove one", 
otherwise return "not possible". The order of the characters should not be changed.

For example:

"abba"   -> "OK"           - this is a palindrome
"abbaa"  -> "remove one"   - remove the 'a' at the extreme right
"abbaab" -> "not possible" - cannot be made a palindrome 

Good luck!
*/

const isPalin = str => str.join('') === [...str].reverse().join('');
const solve = s => {
    s = s.split('');
    if (isPalin(s)) return 'OK';

    for (let i = 0; i < s.length / 2; i++) {
        if (s[i] !== s[s.length - 1 - i]) {
            s1 = s.slice();
            s1[i] = '';
            s2 = s.slice();
            s2[s.length - 1 - i] = '';
            return (isPalin(s1) || isPalin(s2)) ? 'remove one' : 'not possible';
        }
    }
};

console.log(solve("abba")) // "OK"
console.log(solve("abbaa")) // "remove one"
console.log(solve("abbaab")) // "not possible"
console.log(solve("madmam")) // "remove one"
console.log(solve("raydarm")) // "not possible"
console.log(solve("hannah")) // "OK"