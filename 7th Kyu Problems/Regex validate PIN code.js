/* Regex validate PIN code
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain 
anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/

// initial solution:
// const validatePIN = pin => (/^[0-9]{4}$|^[0-9]{6}$/).test(pin);

const validatePIN = pin => (/^(\d{4}|\d{6})/).test(pin);

console.log(validatePIN("1")) // false
console.log(validatePIN("12")) // false
console.log(validatePIN("123")) // false
console.log(validatePIN("12345")) // false
console.log(validatePIN("1234567")) // false
console.log(validatePIN("-1234")) // false
console.log(validatePIN("1.234")) // false
console.log(validatePIN("-1.234")) // false
console.log(validatePIN("00000000")) // false
console.log(validatePIN("a234")) // false
console.log(validatePIN(".234")) // false
console.log(validatePIN("1234")) // true
console.log(validatePIN("0000")) // true
console.log(validatePIN("1111")) // true
console.log(validatePIN("123456")) // true
console.log(validatePIN("098765")) // true
console.log(validatePIN("000000")) // true
console.log(validatePIN("123456")) // true
console.log(validatePIN("090909")) // true