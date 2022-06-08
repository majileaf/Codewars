/*
Step 1: Create a function called encode() to replace all the lowercase vowels 
in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5

For example, encode("hello") would return "h2ll4". There is no need to worry about
uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels 
according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function 
will correspond to vowels.
*/

const encodeVowels = {a: 1, e: 2, i: 3, o: 4, u: 5};
const decodeVowels = {1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u'};

const encode = string => [...string].map(letter => encodeVowels[letter] || letter).join('');
const decode = string => [...string].map(letter => decodeVowels[letter] || letter).join('');

console.log(encode('hello')) // 'h2ll4'
console.log(encode('How are you today?')) // 'H4w 1r2 y45 t4d1y?'
console.log(encode('This is an encoding test.')) // 'Th3s 3s 1n 2nc4d3ng t2st.'
console.log(decode('h2ll4')) // 'hello'

console.log(decode(encode('hello'))) // 'hello'
console.log(decode(encode('How are you today?'))) // 'How are you today?'
console.log(decode(encode('This is an encoding test.'))) // 'This is an encoding test.'
console.log(encode(decode('h2ll4'))) // 'h2ll4'