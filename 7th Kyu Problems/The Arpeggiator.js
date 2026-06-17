/* The Arpeggiator
In music, a scale is made up of seven different values (A through G inclusive) with the ROOT value occuring twice 
forming the scale's first and eighth (last) note.

So if the root = B, the scale looks like this:
  B C D E F G A B

and if the root = F, the scale looks like this:
  F G A B C D E F
  
Each scale has an arpeggio made up of it's first, third, fifth and eighth notes.

So the arpeggio for scale root B looks like this:
 B D F B
 
and the arpeggio for scale root F looks like this:
 F A C F
 
Write a programme that takes any possible root note and returns it's arpeggio in an array. 
If the object input isn't a root note, return 'undefined/Nothing'. Watch for capitalization!

Example:
arpeggio("A") == ["A", "C", "E", "A"]
arpeggio("E") == ["E", "G", "B", "E"]
arpeggio("Z") == undefined
arpeggio("a") == undefined
*/

const scale = ['B', 'C', 'D', 'E', 'F', 'G', 'A'];
const arpeggio = notes => {
    const noteIdx = scale.indexOf(notes);
    if (noteIdx === -1) return undefined;
    
    const arr = [...Array(8)].map((_, i) => scale[(i + noteIdx) % 7]);
    return [arr[0], arr[2], arr[4], arr[7]];
}

console.log(arpeggio("B")) // ["B", "D", "F", "B"]
console.log(arpeggio("Z")) // undefined
console.log(arpeggio("A")) // ["A", "C", "E", "A"]
console.log(arpeggio("c")) // undefined
console.log(arpeggio("C")) // ["C", "E", "G", "C"]
console.log(arpeggio("D")) // ["D", "F", "A", "D"]
console.log(arpeggio("E")) // ["E", "G", "B", "E"]
console.log(arpeggio("F")) // ["F", "A", "C", "F"]
console.log(arpeggio("G")) // ["G", "B", "D", "G"]