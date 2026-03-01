/* Change it up
Create a function that takes a string as a parameter and does the following, in this order:
    Replaces every letter with the letter following it in the alphabet (see note below)
    Makes any vowels capital
    Makes any consonants lower case

Note:
    the alphabet should wrap around, so Z becomes A
    in this kata, y isn't considered as a vowel.

So, for example the string "Cat30" would return "dbU30" (Cat30 --> Dbu30 --> dbU30)
*/

const changer = str => str
    .replace(/[a-z]/gi, char => char === char.toUpperCase() 
        ? String.fromCharCode((char.charCodeAt() - 65 + 1) % 26 + 65) 
        : String.fromCharCode((char.charCodeAt() - 97 + 1) % 26 + 97))
    .replace(/[aeiou]/gi, char => char.toUpperCase())
    .replace(/[^aeiou]/gi, char => char.toLowerCase());

console.log(changer('Cat30')) // 'dbU30'
console.log(changer('Alice')) // 'bmjdf'
console.log(changer('sponge1')) // 'tqpOhf1'
console.log(changer('Hello World')) // 'Ifmmp xpsmE'
console.log(changer('dogs')) // 'Epht'
console.log(changer('z')) // 'A'