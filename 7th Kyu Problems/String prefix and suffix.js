/* String prefix and suffix
In this Kata, you will be given a string and your task will be to return the length of the longest prefix 
that is also a suffix. A prefix is the start of a string while the suffix is the end of a string. 

For instance, the prefixes of the string "abcd" are ["a","ab","abc"]. The suffixes are ["bcd", "cd", "d"]. 
You should not overlap the prefix and suffix.

for example:
solve("abcd") = 0, because no prefix == suffix. 
solve("abcda") = 1, because the longest prefix which == suffix is "a".
solve("abcdabc") = 3. Longest prefix which == suffix is "abc".
solve("aaaa") = 2. Longest prefix which == suffix is "aa". You should not overlap the prefix and suffix
solve("aa") = 1. You should not overlap the prefix and suffix.
solve("a") = 0. You should not overlap the prefix and suffix.

All strings will be lowercase and string lengths are 1 <= length <= 500
*/

const solve = s => {  
    const first = s.slice(0, s.length / 2);
    const last = s.slice(-s.length / 2);

    for (let i = 0; i < last.length; i++) {
        if (first[0] === last[i] && first.startsWith(last.slice(i))) return last.slice(i).length;
    }
    return 0;
}

console.log(solve("abcd")) // 0
console.log(solve("abcda")) // 1
console.log(solve("abcdabc")) // 3
console.log(solve("abcabc")) // 3
console.log(solve("abcabca")) // 1
console.log(solve("abcdabcc")) // 0
console.log(solve("aaaaa")) // 2
console.log(solve("aaaa")) // 2
console.log(solve("aaa")) // 1
console.log(solve("aa")) // 1
console.log(solve("a")) // 0
console.log(solve("acbacc")) //  0