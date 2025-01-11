/* Left$ and Right$
Once upon a time, more precisely upon BASIC time, there were 2 functions named LEFT$ and RIGHT$ 
(I wrote them uppercase because it was the custom in those early years).

These functions let you read left(/right)-most characters of a string.

use: LEFT$ (str, i) -> returns i left-most characters of str.
- eg:
A$="ABCDEFG":PRINT LEFT$(A$,3) - prints ABC
and RIGHT$ (str, i ), of course, returns i right-most characters of str.

So, your mission is...
...to write 2 functions ( left$(str, i) & right$(str, i) ) (left & right in Ruby or Python) 
that will work as the BASIC ones did,... except :

i may be a negative integer. In this case the function returns the whole string but i right(/left)-most chars (respectively in left$(/right$) function).
if i === 0 : returns an empty string;
if no i is provided consider it should be 1 ( not zero ).
if i is greater than str length : returns the whole str.

and

if i is a string ( yes it can ) : returns part of str at left(/right) of i.
returns left of first occurence of i
returns right of last occurence of i

Examples:
var str = 'Hello (not so) cruel World!'

left$(str,5)   // -> 'Hello'
left$(str,-22) // -> 'Hello'
left$(str,1)   // -> 'H'
left$(str)     // -> 'H' too
left$(str,0)   // -> ''
left$(str,99)  // -> 'Hello (not so) cruel World!'

right$(str,6)  // -> 'World!'
right$(str)    // -> '!'

//== with string as 2d argument ==
left$(str,'o') // -> 'Hell'
right$(str,'o')// -> 'rld!'
left$(str,' ') // -> 'Hello'  // -- string may be a space
*/


const left$ = (str, i = 1) => 
    typeof i === 'string' ? str.slice(0, str.indexOf(i)) 
  : i < 0                 ? str.slice(0, str.length + i) 
  : str.slice(0, i);

const right$ = (str, i = 1) => 
    typeof i === 'string' ? str.slice(str.lastIndexOf(i) + i.length)
  : i === 0               ? ''
  : i < 0                 ? str.slice(-(str.length + i))
  : str.slice(-i);

console.log(right$('Don\'t Repeat Yourself', 'Repeat ')) // 'Yourself'
console.log(right$('Don\'t Repeat Yourself', ' ')) // 'Yourself'

console.log(left$('Hello o o o  World',5)) // 'Hello'
console.log(right$('Hello o o o  World',5)) // 'World'
console.log(left$('Hello o o o  World',1)) // 'H'

console.log(left$('Hello (not so) cruel World!',5))    // -> 'Hello'
console.log(left$('Hello (not so) cruel World!',-22))  // -> 'Hello'
console.log(left$('Hello (not so) cruel World!',1))    // -> 'H'
console.log(left$('Hello (not so) cruel World!'))      // -> 'H' too
console.log(left$('Hello (not so) cruel World!',0))    // -> ''
console.log(left$('Hello (not so) cruel World!',99))   // -> 'Hello (not so) cruel World!'

console.log(right$('Hello (not so) cruel World!',6))   // -> 'World!'
console.log(right$('Hello (not so) cruel World!'))     // -> '!'

console.log(left$('Hello (not so) cruel World!','o'))  // -> 'Hell'
console.log(right$('Hello (not so) cruel World!','o')) // -> 'rld!'
console.log(left$('Hello (not so) cruel World!',' '))  // -> 'Hello'  // -- string may be a space