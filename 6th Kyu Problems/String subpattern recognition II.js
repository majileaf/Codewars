/* String subpattern recognition II
Similarly to the previous kata, you will need to return a boolean value if the base string can be expressed as 
the repetition of one subpattern.

This time there are two small changes:
    if a subpattern has been used, it will be present at least twice, meaning the subpattern has to be shorter than the original string;
    the strings you will be given might or might not be created repeating a given subpattern, then shuffling the result.

For example:
"a" --> false; //no repeated shorter sub-pattern, just one character
"aaaa" --> true; //just one character repeated
"abcd" --> false; //no repetitions
"babababababababa" --> true; //repeated "ba"
"bbabbaaabbaaaabb" --> true; //same as above, just shuffled

Strings will never be empty and can be composed of any character (just consider upper- and lowercase letters as different entities) 
and can be pretty long (keep an eye on performances!).
*/

const hasSubpattern = string => {
    const count = [...string].reduce((sum, n) => (sum[n] = (sum[n] || 0) + 1, sum), {});
    const values = Object.values(count);
    const [max, min] = [Math.max(...values), Math.min(...values)];
    return Object.values(count).every(e => e > 1 && e === max) || Object.values(count).every(e => e > 1 && e % min === 0) || Object.values(count).every(e => e % 2 === 0);
}

console.log(hasSubpattern("a")) // false
console.log(hasSubpattern("AA")) // true
console.log(hasSubpattern("444")) // true
console.log(hasSubpattern("aaaa")) // true
console.log(hasSubpattern("abcd")) // false
console.log(hasSubpattern("babababababababa")) // true
console.log(hasSubpattern("bbabbaaabbaaaabb")) // true
console.log(hasSubpattern("ababababa")) // false
console.log(hasSubpattern("aaaabb")) // true
console.log(hasSubpattern("abbb")) // false
console.log(hasSubpattern("123a123a123a")) // true
console.log(hasSubpattern("123A123a123a")) // false
console.log(hasSubpattern("12aa13a21233")) // true
console.log(hasSubpattern("12aa13a21233A")) // false
console.log(hasSubpattern("aabbbbbbaa")) // true
console.log(hasSubpattern("abcdabcaccd")) // false
console.log(hasSubpattern("aaabbbccccdddddddd")) // false