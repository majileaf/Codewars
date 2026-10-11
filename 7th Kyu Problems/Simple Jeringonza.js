/* Simple Jeringonza
Hepellopo!

Jeringonza is a Spanish language game, similar to Pig Latin, played by children in Spain and all over Hispanic America. 
It consists of adding the letter p after each vowel (a, e, i, o or u) of a word, and repeating the vowel. 
For example, jeringonza becomes jeperipingoponzapa (or j-epe-r-ipi-ng-opo-nz-apa).

For the purposes of this kata, the input and output are both strings and no input strings will be empty. 
Also, the added 'p' should match the case of the vowel. So opo for o and EPE for E.

(If you're interested - there's a few extra components in jeringonza, such as how to deal with stressed vowels, 
but for the purposes of this kata we're keeping it simple)

Gopoopod lupuck!
*/

const jeringonza = str => str.replace(/[aeiou]/gi, char => char === char.toLowerCase() 
    ? `${char}p${char}` 
    : `${char}P${char}`);

console.log(jeringonza('jeringonza')) // 'jeperipingoponzapa'
console.log(jeringonza('jEringonzA')) // 'jEPEripingoponzAPA'
console.log(jeringonza('Played in Spain and across Latin America')) // 'Plapayeped ipin Spapaipin apand apacroposs Lapatipin APAmeperipicapa'
console.log(jeringonza('The quick brown fox jumped over the lazy dog')) // 'Thepe qupuipick bropown fopox jupumpeped opoveper thepe lapazy dopog'
console.log(jeringonza('Please give this kata some love if you enjoyed it')) // 'Plepeapasepe gipivepe thipis kapatapa sopomepe lopovepe ipif yopoupu epenjopoyeped ipit'