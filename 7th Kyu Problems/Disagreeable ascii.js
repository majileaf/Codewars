/* Disagreeable ascii
You would like to get the 'weight' of a name by getting the sum of the ascii values. 
However you believe that capital letters should be worth more than mere lowercase letters. 
Spaces, numbers, or any other character are worth 0.

Normally in ascii
a has a value of 97
A has a value of 65
' ' has a value of 32
0 has a value of 48

To find who has the 'weightier' name you will switch all the values so:
A will be 97
a will be 65
' ' will be 0
0 will be 0
etc...

For example Joe will have a weight of 254, instead of 286 using normal ascii values.
*/

const checkWeight = str => (/[^a-z]/gi.test(str)) ? 0 : str === str.toUpperCase() ? str.toLowerCase().charCodeAt() : str.toUpperCase().charCodeAt();
const getWeight = name => [...name].reduce((sum, n) => sum + checkWeight(n), 0);

console.log(getWeight("Joe")) // 254
console.log(getWeight("CJ")) // 205
console.log(getWeight("cj")) // 141