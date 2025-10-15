/* Perfect Square.
Task
Write function which validates an input string. If the string is a perfect square return true,false otherwise.
What is perfect square?
* We assume that character '.' (dot) is a perfect square (1x1) * Perfect squares can only contain '.' (dot) and 
optionally '\n' (line feed) characters.
* Perfect squares must have same width and height -> cpt.Obvious
* Squares of random sizes will be tested!

Function input:
perfectSquare = "...\n...\n...";    

// This represents the following Perfect Square:
`...
 ...
 ...`
                               
notPerfect = "..,\n..\n...";

// This is not a Perfect Square:
`..,
 ..
 ...`
*/

const perfectSquare = string => {
    const arr = string.split('\n');
    const pattern = '.'.repeat(arr[0].length);
    return arr.length === pattern.length && arr.every(e => pattern === e);
}

console.log(perfectSquare(".")) // true
console.log(perfectSquare("..\n..")) // true
console.log(perfectSquare("...\n...\n...")) // true
console.log(perfectSquare("...\n,..\n...")) // false
console.log(perfectSquare(",,,\n,,,\n,,,")) // false
console.log(perfectSquare(".\n.\n.")) // false