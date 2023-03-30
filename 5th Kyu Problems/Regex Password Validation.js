/* Regex Password Validation
You need to write regex that will validate a password to make sure it 
meets the following criteria:

At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a digit
only contains alphanumeric characters (note that '_' is not alphanumeric)
*/

// assign your RegExp to REGEXP
const REGEXP = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])[a-zA-Z0-9]{6,}$/;

console.log(test('fjd3IR9')) // true
console.log(test('ghdfj32')) // false
console.log(test('DSJKHD23')) // false
console.log(test('dsF43')) // false
console.log(test('4fdg5Fj3')) // true
console.log(test('DHSJdhjsU')) // false
console.log(test('fjd3IR9.;')) // false
console.log(test('fjd3  IR9')) // false
console.log(test('djI38D55')) // true
console.log(test('djI3_8D55')) // false
console.log(test('djI38D55@@')) // false