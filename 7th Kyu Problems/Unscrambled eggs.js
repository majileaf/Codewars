/* Unscrambled eggs
Unscramble the eggs.

The string given to your function has had an "egg" inserted directly after each consonant.
You need to return the string before it became eggcoded.

Example
unscrambleEggs("Beggegeggineggneggeregg"); => "Beginner"
//             "B---eg---in---n---er---"
*/

const unscrambleEggs = word => word.replace(/egg/g, '');

// alternatively:
// const unscrambleEggs = word => word.split('egg').join('');
// const unscrambleEggs = word => word.replace(/([^aeiou])egg/gi, '$1');

console.log(unscrambleEggs("ceggodegge heggeregge")) // "code here"
console.log(unscrambleEggs("FeggUNegg KeggATeggA")) //"FUN KATA"