/* Tap Code Translation
Tap code is a way to communicate using a series of taps and pauses for each letter. 
In this kata, we will use dots . for the taps and whitespaces for the pauses.

The number of taps needed for each letter matches its coordinates in the following 
polybius square (note the c/k position). Then you "tap" the row, a pause, then the column. 
Each letter is separated from others with a pause too.

   1  2  3  4  5
1  A  B C\K D  E
2  F  G  H  I  J
3  L  M  N  O  P
4  Q  R  S  T  U
5  V  W  X  Y  Z

Input:
A lowercase string of a single word (no whitespaces or punctuation, only letters).

Output:
The encoded string as taps and pauses.

Examples
text = "dot"
  "D" = (1, 4) = ". ...."
  "O" = (3, 4) = "... ...."
  "T" = (4, 4) = ".... ...."
  
output: ". .... ... .... .... ...."

"example" -> ". ..... ..... ... . . ... .. ... ..... ... . . ....."
"more"    -> "... .. ... .... .... .. . ....."
*/

const tapCodeTranslation = text => [...text].map(e => '.'.repeat(findCoord(e)[0]) + ' ' + '.'.repeat(findCoord(e)[1])).join(' ');

const findCoord = char => {
    if (char === 'k') char = 'c';
    let n = (char.charCodeAt() - 97 - (char > 'k')) % 5 + 1;
    let m = Math.ceil((char.charCodeAt() - 96 - (char > 'k')) / 5);
    
    return [m, n];
}

console.log(tapCodeTranslation("test")) // ".... .... . ..... .... ... .... ...."
console.log(tapCodeTranslation("total")) // ".... .... ... .... .... .... . . ... ."
console.log(tapCodeTranslation("break")) // ". .. .... .. . ..... . . . ..."
console.log(tapCodeTranslation("something")) // ".... ... ... .... ... .. . ..... .... .... .. ... .. .... ... ... .. .."
console.log(tapCodeTranslation("final")) // ".. . .. .... ... ... . . ... ."