/*
Given an array of numbers, check if any of the numbers are the character 
codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.
*/

// initital
// const isVow = a => a.slice().map(e => 'aeiou'.includes(String.fromCharCode(String(e))) ? String.fromCharCode(String(e)) : e);

const isVow = a => {
    const arrReplaced = a.slice();
    for (let i = 0; i < arrReplaced.length; i++) {
        switch(String.fromCharCode(arrReplaced[i].toString())) {
            case ('a'): arrReplaced[i] = 'a'; break;
            case ('e'): arrReplaced[i] = 'e'; break;
            case ('i'): arrReplaced[i] = 'i'; break;
            case ('o'): arrReplaced[i] = 'o'; break;
            case ('u'): arrReplaced[i] = 'u'; break;
        }
    }
    return arrReplaced;
}

console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106])) // [118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]
console.log(isVow([101,121,110,113,113,103,121,121,101,107,103])) // ["e",121,110,113,113,103,121,121,"e",107,103]