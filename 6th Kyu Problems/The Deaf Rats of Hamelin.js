/* The Deaf Rats of Hamelin
Story
The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.

But some of the rats are deaf and are going the wrong way!

Kata Task
How many deaf rats are there?

Legend
    P = The Pied Piper
    O~ = Rat going left
    ~O = Rat going right

Example
    ex1 ~O~O~O~O P has 0 deaf rats
    ex2 P O~ O~ ~O O~ has 1 deaf rat
    ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats
*/

const countDeafRats = town => {
    const arr = town.match(/~O|O~|P/g);
    const idxP = arr.findIndex(e => e === 'P');
    let deaf = 0;

    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] === '~O' && i > idxP) || (arr[i] === 'O~' && i < idxP)) deaf++;
    }
    return deaf;
}

console.log(countDeafRats("~O~O~O~O P")) // 0
console.log(countDeafRats("P O~ O~ ~O O~")) // 1
console.log(countDeafRats("~O~O~O~OP~O~OO~")) // 2