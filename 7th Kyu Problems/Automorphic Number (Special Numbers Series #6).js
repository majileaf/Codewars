/* Automorphic Number (Special Numbers Series #6)
A number is called Automorphic number if and only if its square ends 
in the same digits as the number itself.

Task
Given a number determine if it Automorphic or not .
*/

const automorphic = n => n == String(n * n).slice(-String(n).length) ? 'Automorphic' : 'Not!!'

console.log(automorphic(1)) // "Automorphic"
console.log(automorphic(3)) // "Not!!"
console.log(automorphic(6)) // "Automorphic"
console.log(automorphic(9)) // "Not!!"
console.log(automorphic(25)) // "Automorphic"
console.log(automorphic(53)) // "Not!!"
console.log(automorphic(76)) // "Automorphic"
console.log(automorphic(95)) // "Not!!"
console.log(automorphic(625)) // "Automorphic"
console.log(automorphic(225)) // "Not!!"