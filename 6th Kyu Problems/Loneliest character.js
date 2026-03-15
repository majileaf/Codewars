/* Loneliest character
Complete the function which accepts a string and returns an array of character(s) that have the most spaces to their right and left.

Notes
    the string can have leading/trailing spaces - you should not count them
    the strings contain only unique characters from a to z
    the order of characters in the returned array doesn't matter

Examples
"a b  c"                        -->  ['b']
"a bcs           d k"           -->  ['d']
"    a b  sc     p     t   k"   -->  ['p']
"a  b  c  de"                   -->  ['b', 'c']
"     a  b  c de        "       -->  ['b']
"abc"                           -->  ['a', 'b', 'c']

Good luck!
*/

const loneliest = str => {
    str = str.trim();
    const count = {};
    let space = 0;
    let prevChar = str[0];

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            count[str[i]] = space;
            count[prevChar] += space;
            prevChar = str[i];
            space = 0;
        }
        else space++;
    }
    const maxSpaces = Math.max(...Object.values(count));
    return Object.keys(count).filter(e => count[e] === maxSpaces);
}

console.log(loneliest('a')) // ['a']
console.log(loneliest('abc d   ef  g   h i j      ')) // ['g']
console.log(loneliest('a   b   c ')) // ['b']
console.log(loneliest('  abc  d  z    f gk s ')) // ['z']
console.log(loneliest('a  b  c  de  ')) // ['b', 'c']
console.log(loneliest('abc')) // ['a', 'b', 'c']