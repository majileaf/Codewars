/* Alternate Logic
Create an OR function that takes a list of boolean values and runs OR against all of them, 
without ( depending on language ) the or keyword or the || operator.

There will be between 0 and 6 elements ( inclusive ).
Return None, nil or a similar empty value for an empty list.
*/

const alternate = items => items.length ? items.reduce((sum, n) => sum ? sum : n) : null;

console.log(alternate([])) // null
console.log(alternate([true])) // true
console.log(alternate([false])) // false
console.log(alternate([true, false, true])) // true
console.log(alternate([true, true, true])) // true
console.log(alternate([false, false, false])) // false