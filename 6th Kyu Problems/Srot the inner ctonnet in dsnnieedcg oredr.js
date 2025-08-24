/* Srot the inner ctonnet in dsnnieedcg oredr
You have to sort the inner content of every word of a string in descending order.

The inner content is the content of a word without first and the last char.

Some examples:

"sort the inner content in descending order"  -->  "srot the inner ctonnet in dsnnieedcg oredr"
"wait for me"        -->  "wiat for me"
"this kata is easy"  -->  "tihs ktaa is esay"

Words are made up of lowercase letters.

The string will never be null and will never be empty. In C/C++ the string is always nul-terminated.
*/

const sortTheInnerContent = words => words.split(' ').map(e => e.length === 1 ? e : e[0] + [...e.slice(1, -1)].sort((a, b) => b.localeCompare(a)).join('') + e.at(-1)).join(' ');

console.log(sortTheInnerContent("sort the inner content in descending order")) // "srot the inner ctonnet in dsnnieedcg oredr"
console.log(sortTheInnerContent("wait for me")) // "wiat for me"
console.log(sortTheInnerContent("this kata is easy")) // "tihs ktaa is esay"