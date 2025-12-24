/* Its all backwards
I give you this: ['This', 'Is', 'a' 'Example');

You give me back this: 'examplE a iS thiS'

So. I want what I give you back in reverse order, with only the last letter of each item capitalized. If the item is a single letter word and not capitilized when I give it to you, do not capitalize it.
*/

const flipper = stringArr => stringArr.map(e => e.length > 1 ? e[0].toLowerCase() + e.slice(1, -1).toLowerCase() + e.slice(-1).toUpperCase(): e).reverse().join(' ');

console.log(flipper(['This', 'Is', 'A', 'Test'])) // "tesT A iS thiS"
console.log(flipper(['This', 'Is', 'a', 'Test'])) // "tesT a iS thiS"