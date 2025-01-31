/* L2: Triple X
Given a string, return true if the first instance of "x" in the string is immediately 
followed by the string "xx".

tripleX("abraxxxas") → true
tripleX("xoxotrololololololoxxx") → false
tripleX("softX kitty, warm kitty, xxxxx") → true
tripleX("softx kitty, warm kitty, xxxxx") → false
Note :

capital X's do not count as an occurrence of "x".
if there are no "x"'s then return false
*/

const tripleX = str => {
    const idx = str.indexOf('x') + 1;
    return str.slice(idx, idx + 2) === 'xx';
}

console.log(tripleX("abraxxxas")) // true
console.log(tripleX("xoxotrololololololoxxx")) // false
console.log(tripleX("soft kitty, warm kitty, xxxxx")) // true
console.log(tripleX("softx kitty, warm kitty, xxxxx")) // false