/* Negative Connotation
You will be given a string with sets of characters, (i.e. words), seperated by between one and four spaces (inclusive).

Looking at the first letter of each word (case insensitive-"A" and "a" should be treated the same), you need to determine
whether it falls into the positive/first half of the alphabet ("a"-"m") or the negative/second half ("n"-"z").

Return True/true if there are more (or equal) positive words than negative words, False/false otherwise.

"A big brown fox caught a bad rabbit" => True/true
"Xylophones can obtain Xenon." => False/false
*/

// initital solution:
const connotation = str => {
    const [pos, neg] = str.split(' ').reduce(([sumPos, sumNeg], n) => (
          /[a-m]/i.test(n[0] || []) ? sumPos++
        : /[n-z]/i.test(n[0] || []) ? sumNeg++
        : [sumPos, sumNeg]
    , [sumPos, sumNeg]), [0, 0]);

    return pos >= neg;
}

// alternatively:
// const connotation =  str => {
//     const pos = str.match(/\b[a-m]/ig) || [];
//     const neg = str.match(/\b[n-z]/ig) || [];
//     return pos.length >= neg.length;
// }

console.log(connotation("A big brown fox caught a bad bunny")) // true
console.log(connotation("Xylophones can obtain Xenon.")) // false
console.log(connotation("CHOCOLATE MAKES A GREAT SNACK")) // true
console.log(connotation("All FOoD tAsTEs NIcE for someONe")) // true
console.log(connotation("Is  this the  best  Kata?")) // true