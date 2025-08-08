/* Get the 𝑟𝑒𝑎𝑙 length of a string
In languages that use UTF-16 encoding for strings (JavaScript, JVM languages like Java, .NET languages like C#...), 
if the code point of a character is larger than 0xFFFF, it will be treated as two code units.

For example:
The code point of the emoji 🙉 (U+1F649, Hear-No-Evil Monkey) is 0x1F649.

'🙉'.length; // 2

Write a function that returns the real length of a string.
"abcd"   --> 4
"🙉"     --> 1
"😸🦌🚀" --> 3
*/

const getRealLength = string => [...string].length;

console.log(getRealLength("")) // 0
console.log(getRealLength("abcd")) //  4
console.log(getRealLength("中国")) //  2
console.log(getRealLength("𝓪𝓫𝓬𝓭")) //  4
console.log(getRealLength("𨭎𩷶")) //  2
console.log(getRealLength("😸🦌🚀")) //  3
console.log(getRealLength("↓→↑←")) //  4
console.log(getRealLength("\nabc\ndef\n")) //  9