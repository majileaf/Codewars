/* Too many reversals
You are an up and coming commentator in the brutal world of pro wrestling. 
However, you suck at telling who reversed the reversal.

You will be provided with a string in the format of : 
"X hit a reversal to Y hit a reversal to X...... hit a reversal to (X/Y)"

Rules:
•The string starts and ends with the respective names of the wrestlers 
(Not necessary that the starting and ending names be the same).

•Input will always be validated.

•X and Y will either be letters or single words.

Determine and return the victor of the match.

Be careful. Your job is on the line!
*/

const whowon = s => s.split(' hit a reversal to ').at(-2);

console.log(whowon("Devant hit a reversal to Kripa")) // "Devant"
console.log(whowon("Alpha hit a reversal to Bravo hit a reversal to Alpha")) // "Bravo"
console.log(whowon("Alpha hit a reversal to Bravo hit a reversal to Alpha hit a reversal to Bravo")) // "Alpha"
console.log(whowon("Xenon hit a reversal to Yara hit a reversal to Xenon hit a reversal to Yara hit a reversal to Xenon")) // "Yara"