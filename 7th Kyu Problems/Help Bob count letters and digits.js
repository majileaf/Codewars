/* Help Bob count letters and digits.
Bob is a lazy man.

He needs you to create a method that can determine how many letters 
(both uppercase and lowercase ASCII letters) and digits are in a given string.

Example:c
"hel2!lo" --> 6
"wicked .. !" --> 6
"!?..A" --> 1
*/

// initial solution:
// const countLettersAndDigits = input => [...input].reduce((sum, n) => sum + check(n), 0);
// const check = n => (n >= 'A' && n <= 'Z' || n >= 'a' && n <= 'z' || n >= '0' && n <= '9');

const countLettersAndDigits = input => [...input].filter(check).length;
const check = n => (n >= 'A' && n <= 'Z' || n >= 'a' && n <= 'z' || n >= '0' && n <= '9');

// alternatively
// const countLettersAndDigits = input => [...input.toLowerCase()].filter(check).length;
// const check = n => (n >= 'a' && n <= 'z' || n >= '0' && n <= '9');

console.log(countLettersAndDigits("hel2!lo")) // 6
console.log(countLettersAndDigits("n!!_ice!!123")) // 7
console.log(countLettersAndDigits("1")) // 1
console.log(countLettersAndDigits("?")) // 0
console.log(countLettersAndDigits("12345f%%%t5t&/6")) // 10
console.log(countLettersAndDigits("aBcDeFg090")) // 10
console.log(countLettersAndDigits("u_n_d_e_r__S_C_O_R_E")) // 10