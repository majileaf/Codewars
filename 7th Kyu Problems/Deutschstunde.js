/* Deutschstunde
Everybody knows a little german, right? But remembering the correct articles is a tough job. 
Write yourself a little helper, that returns the noun with the matching article:

each noun containing less than 2 vowels has the article "das"
each noun containing 2/3 vowels has the article "die"
each noun containing more than 3 vowels has the article "der"
Caution: Vowels are "a,e,i,o,u". Umlaute (ä ö ü) are also being counted!

(This Kata is a joke, there is no such grammar rule!)
*/

const derDieDas = wort => {
    const len = (wort.match(/[aeiouäöü]/gi) || []).length;
    const article = len < 2 ? 'das' :
                    len < 4 ? 'die' :
                    'der';
    return `${article} ${wort}`;
}

console.log(derDieDas('OOOpa')) // 'der OOOpa'
console.log(derDieDas('Suppenhuhn')) // 'die Suppenhuhn'
console.log(derDieDas('Geheimdienst')) // 'der Geheimdienst'
console.log(derDieDas('Ofenkartoffel')) // 'der Ofenkartoffel'
console.log(derDieDas('Fisch')) // 'das Fisch'
console.log(derDieDas('Knödel')) // 'die Knödel'
console.log(derDieDas('Leberkaassemmi')) // 'der Leberkaassemmi'