/* Ultimate Array Reverser
Task
Given an array of strings, reverse them and their order in such way that their length stays the same as the length of the original inputs.

Example:
Input:  {"I", "like", "big", "butts", "and", "I", "cannot", "lie!"}
Output: {"!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"}
*/

const ultimateReverse = s => {
    const reversed = s.join('').split('').reverse().join('');
    const arr = [];
    for (let i = 0, j = 0; i < s.length; i++) {
        arr.push(reversed.slice(j, j + s[i].length));
        j += s[i].length;
    }
    return arr;
};

console.log(ultimateReverse(["I", "like", "big", "butts", "and", "I", "cannot", "lie!"])) 
                         // ["!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"]
console.log(ultimateReverse(["?kn", "ipnr", "utotst", "ra", "tsn", "iksr", "uo", "yer", "ofebta", "eote", "vahu", "oyodpm", "ir", "hsyn", "amwoH"])) 
                         // ["How", "many", "shrimp", "do", "you", "have", "to", "eat", "before", "your", "skin", "starts", "to", "turn", "pink?"]