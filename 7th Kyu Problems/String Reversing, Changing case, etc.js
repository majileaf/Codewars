/* String Reversing, Changing case, etc.
Given 2 string parameters, show a concatenation of:

the reverse of the 2nd string with inverted case; e.g Fish -> HSIf
a separator in between both strings: @@@
the 1st string reversed with inverted case and then mirrored; e.g Water -> RETAwwATER 
*/

const reverse = str => [...str].reverse().join('');
const invert = str => [...str].map((e, i) => e === str[i].toUpperCase() ? e.toLowerCase() : e.toUpperCase()).join('');
const mirror = str => str + reverse(str);
const reverseAndMirror = (s1, s2) => invert(reverse(s2)) + '@@@' + mirror(invert(reverse(s1)));

console.log(reverseAndMirror("FizZ", "buZZ")) // "zzUB@@@zZIffIZz"
console.log(reverseAndMirror("String Reversing", "Changing Case")) // "ESAc GNIGNAHc@@@GNISREVEr GNIRTssTRING rEVERSING"