/* Circle cipher
Imagine a circle. To encode the word codewars, we could split the circle into 8 parts (as codewars has 8 letters):
Then add the letters in a clockwise direction: Then remove the circle:

If we read the result from left to right, we get csordaew.

Decoding is the same process in reverse. If we decode csordaew, we get codewars.

Examples:
    encode "codewars" -> "csordaew"
    decode "csordaew" -> "codewars"

    encode "white" -> "wehti"
    decode "wehti" -> "white"
*/

const encode = s => {
    let str = '';
    for (let i = 0, j = 0, k = 0; i < s.length; i++) {
        str += (i % 2 === 0) ? s[j++]: s[s.length - 1 - k++];
    }
    return str;
}

const decode = s => {
    let first = '';
    let last = '';
    for (let i = 0; i < s.length; i++) {
        (i % 2 === 0) ? first += s[i] : last += s[i];
    }
    return first + [...last].reverse().join('');
}

console.log(encode("codewars")) // "csordaew"
console.log(encode("white")) // "wehti"
console.log(encode("Assert")) // "Atsrse"
console.log(encode("Hello world!")) // "H!edlllroo w"
console.log(encode("You have chosen to translate this kata.")) // "Y.oaut ahka vsei hcth oesteanl stnoa rt"

console.log(decode("csordaew")) // "codewars"
console.log(decode("wehti")) // "white"
console.log(decode("Atsrse")) // "Assert"
console.log(decode("H!edlllroo w")) // "Hello world!"
console.log(decode("Y.oaut ahka vsei hcth oesteanl stnoa rt")) // "You have chosen to translate this kata."