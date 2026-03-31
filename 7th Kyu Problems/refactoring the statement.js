/* refactoring the statement
We want to convert numbers in a given string to specific characters according to ASCII code with some manipulation on it. 
This statement 'str8ng is he17e' should converted to 'string is here', its just converting these numbers to ASCII code 
then to a char according to it.

So you should understand how ASCII code of chars are sorted, and if its begin with 'a' as 0, next one is 'b' which is 1 in someway.

each word contains just one character to convert the number to it.

Example: if given string is '0pple' that will return 'apple'.
*/

// return a meaning full string without numbers.
const refactoryString = str => str.replace(/\d+/g, digit => String.fromCharCode(+digit + 97));

console.log(refactoryString('str8ng is he17e')) // 'string is here'
console.log(refactoryString('i li10e pro6ramming')) //  'i like programming