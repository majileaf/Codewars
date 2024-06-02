/* Trigrams
Trigrams are a special case of the n-gram, where n is 3. 
One trigram is a continous sequence of 3 chars in phrase. (https://en.wikipedia.org/wiki/Trigram)

return all trigrams for the given phrase
replace spaces with underscore (_)
return an empty string for phrases shorter than 3

Example:
"the quick red" --> "the he_ e_q _qu qui uic ick ck_ k_r _re red"
*/

const trigrams = phrase => [...Array(phrase.length - 2)].map((_, i) => phrase.slice(i, i + 3).replace(/\s/g, '_')).join(' ');

console.log(trigrams("the quick red")) // "the he_ e_q _qu qui uic ick ck_ k_r _re red"
console.log( trigrams("no")) // ""