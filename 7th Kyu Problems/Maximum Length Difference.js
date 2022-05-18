/*
You are given two arrays a1 and a2 of strings. Each string is composed 
with letters from a to z. Let x be any string in the first array and y 
be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in 
Haskell (F#) where you will return Nothing (None).

Example:
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13

Bash note:
input : 2 strings with substrings separated by ,
output: number as a string
*/

const mxdiflg = (a1, a2) => {
    if (a1.length < 1 || a2.length < 1) return -1;
    let a1min = a2min = Infinity;
    let a1max = a2max = 0;

    for (let i = 0; i < a1.length; i++) {
        if (a1[i].length < a1min) a1min = a1[i].length;
        if (a1[i].length > a1max) a1max = a1[i].length;
    }

    for (let i = 0; i < a2.length; i++) {
        if (a2[i].length < a2min) a2min = a2[i].length;
        if (a2[i].length > a2max) a2max = a2[i].length;
    }

    let diff1 = Math.abs(a1min - a2max);
    let diff2 = Math.abs(a1max - a2min);

    return Math.max(diff1, diff2);
}

const s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
const s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
console.log(mxdiflg(s1, s2)) // 13