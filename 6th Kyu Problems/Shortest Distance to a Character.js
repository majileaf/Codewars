/* Shortest Distance to a Character
Given a string s and a character c, return an array of integers representing the shortest distance 
from the current character in s to c.

Notes
    All letters will be lowercase.
    If the string is empty, return an empty array.
    If the character is not present, return an empty array.

Examples
s = "lovecodewars"
c = "e"
result = [3, 2, 1, 0, 1, 2, 1, 0, 1, 2, 3, 4]

s = "aaaabbbb"
c = "b"
result = [4, 3, 2, 1, 0, 0, 0, 0]

s = ""
c = "b"
result = []

s = "abcde"
c = ""
result = []
*/

const getCharIdxF = (str, idx, char) => {
    for (let i = idx; i < str.length; i++) {
        if (str[i] === char) return i - idx;
    }
    return -1;
}

const getCharIdxB = (str, idx, char) => {
    for (let i = idx; i >= 0; i--) {
        if (str[i] === char) return Math.abs(i - idx);
    }
    return -1;
}

const shortesttoChar = (s, c) => s && c && s.indexOf(c) !== -1 
    ? [...s].map((_, i) => Math.min(...[getCharIdxF(s, i, c), getCharIdxB(s, i, c)].filter(e => e !== -1))) 
    : [];

console.log(shortesttoChar("lovecodewars", "e")) // [3, 2, 1, 0, 1, 2, 1, 0, 1, 2, 3, 4]
console.log(shortesttoChar("aaaaa", "a")) // [0, 0, 0, 0, 0]
console.log(shortesttoChar("aabbaabb", "a")) // [0, 0, 1, 1, 0, 0, 1, 2]
console.log(shortesttoChar("aaaabbbb", "b")) // [4, 3, 2, 1, 0, 0, 0, 0]
console.log(shortesttoChar("aaaaa", "b")) // []
console.log(shortesttoChar("lovecoding", "")) // []
console.log(shortesttoChar("", "")) // []