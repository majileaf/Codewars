/* Alphabet war - airstrike - letters massacre
Introduction

There is a war...between alphabets!
There are two groups of hostile letters. The tension between left side letters and right side letters 
was too high and the war began. The letters called airstrike to help them in war - dashes and dots are 
spread throughout the battlefield. Who will win?

Task
Write a function that accepts a fight string which consists of only small letters and * which represents 
a bomb drop place. Return who wins the fight after bombs are exploded. When the left side wins return 
Left side wins!, and when the right side wins return Right side wins!. In other cases, return Let's fight again!.

The left side letters and their power:
 w - 4
 p - 3 
 b - 2
 s - 1

The right side letters and their power:
 m - 4
 q - 3 
 d - 2
 z - 1

The other letters don't have power and are only victims.
The * bombs kill the adjacent letters ( i.e. aa*aa => a___a, **aa** => ______ );
*/

const alphabetWar = fight => {
  const left = {w: 4, p: 3, b: 2, s: 1};
  const right = {m: 4, q: 3, d: 2, z: 1};
  let fightCopy = [...fight];

  for (let i = 0; i < fight.length; i++) {
      if (fight[i] === '*') {
          fightCopy[i - 1] = '_';
          fightCopy[i] = '_';
          fightCopy[i + 1] = '_';
      }
  }

  const result = fightCopy.reduce((sum, n) => (sum.left += left[n] || 0, sum.right += right[n] || 0, sum), {left: 0, right: 0});

  return result.right > result.left 
            ? "Right side wins!" 
       : result.right < result.left 
            ? "Left side wins!" 
            : "Let's fight again!";
}

console.log(alphabetWar("z")) // "Right side wins!" 
console.log(alphabetWar("****")) // "Let's fight again!" 
console.log(alphabetWar("z*dq*mw*pb*s")) // "Let's fight again!" 
console.log(alphabetWar("zdqmwpbs")) // "Let's fight again!" 
console.log(alphabetWar("zz*zzs")) // "Right side wins!" 
console.log(alphabetWar("sz**z**zs")) // "Left side wins!" 
console.log(alphabetWar("z*z*z*zs")) // "Left side wins!" 
console.log(alphabetWar("*wwwwww*z*")) // "Left side wins!" 