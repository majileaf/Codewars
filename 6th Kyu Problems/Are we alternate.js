/* Are we alternate?
Task
Create a function that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and 
consonants are in alternate order.

Examples
"amazon" --> true
"apple" --> false
"banana" --> true

Note
    Arguments consist of only lowercase letters.
*/

const isAlt = word => {
    const check = /[aeiou]/.test(word[0]);
    return [...word].every((e, i) => i % 2 ? /[^aeiou]/.test(e) === check : /[aeiou]/.test(e) === check);
}

console.log(isAlt("amazon")) // true
console.log(isAlt("apple")) // false
console.log(isAlt("banana")) // true