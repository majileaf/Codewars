/* Alex & snooker: points earned.
Story
Alex is a great fan of snooker and he likes recording the results of his favourite players 
by recording the balls that fall into the pockets of the table. 

He asks you to help him with a program that calculates the points a player scored in a 
given set using his notes. Unfortunately, his notes are quite a mess... 

Sometimes Alex forgets that he already wrote down a color and records it multiple times.

Task
Given his short hand notation as string, calculate the points a player scored in a set.

He codes the ball colors with letters:
- R  = red     -->  1 point
- Y  = yellow  -->  2 points
- G  = green   -->  3 points
- Bn = brown   -->  4 points
- Be = blue    -->  5 points
- P  = pink    -->  6 points
- Bk = black   -->  7 points
- W  = white   -->  no points because it's a foul

The color may be followed by a number, e.g. R12 would stand for 12 red balls pocketed. 
If there is no number given, the ball was pocketed once.

Notes:
    If the string includes the white ball, return 'Foul'
    If the total score is more than 147, return 'invalid data'

For your convenience the points for each color are provided as hash / dictionary with the name blz

Examples
'R15P3G1Bk4Y1Bn1Be3'          -->  85
'R13Bk14YRGBnBkRBePBk1'       -->  147
'G9G11P9Bn2Bn1Be10G7WBn10G3'  -->  'Foul'
'Bn14Bn14Bn8P9'               -->  'invalid data'
*/

const blz = { R: 1, Y: 2, G: 3, Bn: 4, Be: 5, P: 6, Bk: 7 };

const frame = balls => {
    const arr = (balls.match(/[A-Z][a-z]?\d*/g) || []).map(e => e.match(/[a-z]+|\d+/gi));
    let sum = 0;
    
    for (const [color, num] of arr) {
        if (color.includes('W')) return 'Foul';
        sum += blz[color] * (+num || 1);
    }
    return sum > 147 ? 'invalid data' : sum;
}

console.log(frame('R15Bk15YGBnBePBk')) // 147
console.log(frame('Bk16YGBnBeP')) // 132
console.log(frame('R9RGBn4BkRBeP')) // 48
console.log(frame('R15Bk16GYGBnBWeP')) //  "Foul"
console.log(frame('R8Bk17YGBnBk5BePBk1')) //  "invalid data"