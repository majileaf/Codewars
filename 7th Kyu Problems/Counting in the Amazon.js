/* Counting in the Amazon
The Arara is an isolated tribe found in the Amazon who count in pairs. For example one to eight is as follows:
    1 = anane
    2 = adak
    3 = adak anane
    4 = adak adak
    5 = adak adak anane
    6 = adak adak adak
    7 = adak adak adak anane
    8 = adak adak adak adak

Take a given number and return the Arara's equivalent.

e.g.
3 --> "adak anane"
8 --> "adak adak adak adak"

https://en.wikipedia.org/wiki/Arara_people
*/

const countArara = n => [...Array(Math.floor(n / 2)).fill('adak'), n % 2 ? 'anane' : []].join(' ');

console.log(countArara(1)) // anane
console.log(countArara(2)) // adak
console.log(countArara(3)) // adak anane
console.log(countArara(4)) // adak adak
console.log(countArara(5)) // adak adak anane
console.log(countArara(6)) // adak adak adak
console.log(countArara(7)) // adak adak adak anane
console.log(countArara(8)) // adak adak adak adak