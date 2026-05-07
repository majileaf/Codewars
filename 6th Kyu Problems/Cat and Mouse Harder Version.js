/* Cat and Mouse - Harder Version
You will be given a string (x) featuring a cat 'C', a dog 'D' and a mouse 'm'. The rest of the string will be made up of '.'.

You need to find out if the cat can catch the mouse from its current position. The cat can jump at most (j) characters, 
and cannot jump over the dog.

So:
    if j = 5:
    ..C.....m...D returns 'Caught!' <-- not more than j characters between the cat and the mouse
    .....C............m......D returns 'Escaped!' <-- as there are more than j characters between the two, 
    the cat cannot jump far enough

    if j = 10:
    ...m.........C...D returns 'Caught!' <-- Cat can jump far enough and jump is not over dog
    ...m....D....C....... returns 'Protected!' <-- Cat can jump far enough, but dog is in the way, protecting the mouse
    Finally, if not all three animals are present, return 'boring without all three'
*/

const checkMouse = str => {
    let [protect, mouse] = [false, false];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'D') protect = true;
        else if (str[i] === 'm' && !protect) return 'Caught!';
    }
    return 'Protected!';
}

const catMouse= (x, j) => {
    if (!x || x.match(/[CmD]/g).length !== 3) return 'boring without all three';
    let [left, right] = x.split('C');
    left = [...left].reverse().join('').slice(0, Math.min(j + 1, left.length));
    right = right.slice(0, Math.min(j + 1, right.length));

    return left.includes('m') ? checkMouse(left) : 
           right.includes('m') ? checkMouse(right) :
           'Escaped!';
}

console.log(catMouse('..C.....m...D', 5)) // 'Caught!'
console.log(catMouse('.....C............m......D' , 5)) // 'Escaped!'

console.log(catMouse('...m.........C...D', 10)) // 'Caught!'
console.log(catMouse('...m....D....C.......', 10)) // 'Protected!'

console.log(catMouse('..D.....Cm', 13)) // 'Caught!'
console.log(catMouse('............C.............D..m...', 8)) // 'Escaped!'
console.log(catMouse('m.C...', 5)) // 'boring without all three'

console.log(catMouse('', 8)) // 'boring without all three'