/* Efficiently remove adjacent duplicate characters from BIG strings
Remove all adjacent duplicate characters from a string, as soon as you encounter them walking left to right, 
and ensuring that at the end NO two adjacent characters remain.

Examples
    dedup('abc') -> 'abc'
    dedup('abbc') -> 'ac'
    dedup('abbbc') -> 'ac'
    dedup('abbcccbad') -> 'abad'
    dedup('abccbbad') -> 'abbbad' -> 'aad' -> 'd'

As stated in the title, be prepared to get a few really big strings.
*/

function dedup(string) {
  // have fun!
}

// no duplicates
console.log(dedup('')) // ''
console.log(dedup('a')) // 'a'
console.log(dedup('abc')) // 'abc'
console.log(dedup('abcba')) // 'abcba'

// simple duplicates
console.log(dedup('aa')) // ''
console.log(dedup('aaaa')) // ''
console.log(dedup('aabaa')) // 'b'
console.log(dedup('abaa')) // 'ab'
console.log(dedup('abba')) // ''

// nested' duplicates
console.log(dedup('abba')) // ''
console.log(dedup('abcdeedcba')) // ''
console.log(dedup('bcdeedcbabcde')) // 'abcde'