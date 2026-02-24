/* Inside Out Strings
You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. 
By this I mean the internal letters will move out, and the external letters move toward the centre.

If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter 
of the word where it is.

An example should clarify:
'taxi' would become 'atix' 'taxis' would become 'atxsi'

Words will be separated by exactly one space and there will be no leading or trailing spaces.
*/

const reversePart = (str, start, end) => [...str.slice(start, end)].reverse().join('');
const insideOut = x => x
    .split(' ')
    .map(e => e.length % 2 
        ? reversePart(e, 0, e.length / 2) + e.slice(e.length / 2, e.length / 2 + 1) + reversePart(e, e.length / 2 + 1)
        : reversePart(e, 0, e.length / 2) + reversePart(e, e.length / 2))
    .join(' ');

console.log(insideOut('man i need a taxi up to ubud')) // 'man i ende a atix up to budu'
console.log(insideOut('what time are we climbing up the volcano')) // 'hwta item are we milcgnib up the lovcona'
console.log(insideOut('take me to semynak')) // 'atek me to mesykan'