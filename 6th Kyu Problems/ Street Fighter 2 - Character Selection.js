/* Street Fighter 2 - Character Selection
Short Intro
Some of you might remember spending afternoons playing Street Fighter 2 in some Arcade back in the 90s or 
emulating it nowadays with the numerous emulators for retro consoles.

Can you solve this kata? Suuure-You-Can!

The Kata
You'll have to simulate the video game's character selection screen behaviour, more specifically the selection grid. 
Such screen looks like this:

Screen:

Selection Grid Layout in text:
| Ryu  | E.Honda | Blanka  | Guile   | Balrog | Vega    |
| Ken  | Chun Li | Zangief | Dhalsim | Sagat  | M.Bison |

Input
    the list of game characters in a 2x6 grid;
    the initial position of the selection cursor (top-left is (0,0));
    a list of moves of the selection cursor (which are up, down, left, right);

Output
    the list of characters who have been hovered by the selection cursor after all the moves (ordered and with repetition, 
    all the ones after a move, whether successful or not, see tests);

Rules
Selection cursor is circular horizontally but not vertically!
As you might remember from the game, the selection cursor rotates horizontally but not vertically; 
that means that if I'm in the leftmost and I try to go left again I'll get to the rightmost (examples: from Ryu to Vega, from Ken to M.Bison) 
and vice versa from rightmost to leftmost.

Instead, if I try to go further up from the upmost or further down from the downmost, I'll just stay where I am located 
(examples: you can't go lower than lowest row: Ken, Chun Li, Zangief, Dhalsim, Sagat and M.Bison in the above image; 
you can't go upper than highest row: Ryu, E.Honda, Blanka, Guile, Balrog and Vega in the above image).

Test
For this easy version the fighters grid layout and the initial position will always be the same in all tests, only the list of moves change.

Notice: changing some of the input data might not help you.

Examples
    fighters = [
      ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
      ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
    ]
    initial_position = (0,0)
    moves = ['up', 'left', 'right', 'left', 'left']

    then I should get:

    ['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']

    as the characters I've been hovering with the selection cursor during my moves. 
    Notice: Ryu is the first just because it "fails" the first up See test cases for more examples.

    fighters = [
      ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
      ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
    ]
    initial_position = (0,0)
    moves = ['right', 'down', 'left', 'left', 'left', 'left', 'right']

    Result:
    ['E.Honda', 'Chun Li', 'Ken', 'M.Bison', 'Sagat', 'Dhalsim', 'Sagat']
*/

const getPosition = (mov) => {
  let [y, x] = [0, 0];
  switch(mov) {
      case 'left' : x--; break;
      case 'right': x++; break;
      case 'up'   : y--; break;
      case 'down' : y++; break;
  }
  return [y, x];
}

const streetFighterSelection = (fighters, position, moves) => {
  let newPos = position.slice();
  return moves.map(move => {
      let [y, x] = getPosition(move);
      newPos[0] += y;
      newPos[1] += x;
      if (newPos[0] < 0) newPos[0] = 0;
      else if (newPos[0] > fighters.length - 1) newPos[0] = fighters.length - 1;
      if (newPos[1] < 0) newPos[1] = fighters[1].length - 1;
      return fighters[newPos[0]][newPos[1] % fighters[1].length];
  });
}

// alternative:
// const streetFighterSelection = (fighters, [y, x], moves) => {
//   const arr = [];
//   for (let i = 0; i < moves.length; i++) {
//       switch(moves[i]) {
//           case 'left' : x = --x < 0 ? fighters[1].length - 1 : x--;                break;
//           case 'right': x = ++x % fighters[1].length;                              break;
//           case 'up'   : y = --y < 0 ? 0 : y--;                                     break;
//           case 'down' : y = ++y > fighters.length - 1 ? fighters.length - 1 : y++; break;
//       }
//       arr.push(fighters[y][x]);
//   }
//   return arr;
// }

let moves = []
let fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];

// should work with few moves
moves = ['up', 'left', 'right', 'left', 'left'];
console.log(streetFighterSelection(fighters, [0,0], moves)) // ['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']
// should work with no selection cursor moves
moves = [];
console.log(streetFighterSelection(fighters, [0,0], moves)) // []
// should work when always moving left
moves = ["left","left","left","left","left","left","left","left"];
console.log(streetFighterSelection(fighters, [0,0], moves)) // ['Vega', 'Balrog', 'Guile', 'Blanka', 'E.Honda', 'Ryu', 'Vega', 'Balrog']
// should work when always moving right
moves = ["right","right","right","right","right","right","right","right"];
console.log(streetFighterSelection(fighters, [0,0], moves)) // ['E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega', 'Ryu', 'E.Honda', 'Blanka']
// should use all 4 directions clockwise twice
moves = ["up","left","down","right","up","left","down","right"];
console.log(streetFighterSelection(fighters, [0,0], moves)) // ['Ryu', 'Vega', 'M.Bison', 'Ken', 'Ryu', 'Vega', 'M.Bison', 'Ken']
// should work when always moving down
moves = ["down","down","down","down"];
console.log(streetFighterSelection(fighters, [0,0], moves)) //  ['Ken', 'Ken', 'Ken', 'Ken']
// should work when always moving up
moves = ["up","up","up","up"];
console.log(streetFighterSelection(fighters, [0,0], moves)) //  ['Ryu', 'Ryu', 'Ryu', 'Ryu']

moves = 
[
  'right', 'down',  'left',  'up',   'up',
  'left',  'up',    'up',    'left', 'up',
  'down',  'right', 'up',    'left', 'down',
  'left',  'right', 'right', 'up',   'up',
  'right', 'up',    'up',    'left', 'up',
  'up',    'right', 'up',    'left', 'right',
  'right', 'up',    'down',  'left', 'left',
  'left',  'up',    'up',    'down', 'up',
  'up',    'down',  'left',  'up',   'left',
  'right', 'down',  'up',    'down', 'left'
]
console.log(streetFighterSelection(fighters, [0, 3], moves))

// [
//   'Balrog',  'Sagat',   'Dhalsim', 'Guile',
//   'Guile',   'Blanka',  'Blanka',  'Blanka',
//   'E.Honda', 'E.Honda', 'Chun Li', 'Zangief',
//   'Blanka',  'E.Honda', 'Chun Li', 'Ken',
//   'Chun Li', 'Zangief', 'Blanka',  'Blanka',
//   'Guile',   'Guile',   'Guile',   'Blanka',
//   'Blanka',  'Blanka',  'Guile',   'Guile',
//   'Blanka',  'Guile',   'Balrog',  'Balrog',
//   'Sagat',   'Dhalsim', 'Zangief', 'Chun Li',
//   'E.Honda', 'E.Honda', 'Chun Li', 'E.Honda',
//   'E.Honda', 'Chun Li', 'Ken',     'Ryu',
//   'Vega',    'Ryu',     'Ken',     'Ryu',
//   'Ken',     'M.Bison'
// ]

moves = 
[
  'right', 'up',   'down',
  'down',  'down', 'up',
  'down',  'left', 'up',
  'down',  'down', 'down',
  'down',  'left', 'down'
]

console.log(streetFighterSelection(fighters, [0, 2], moves))

// [
//   'Guile',   'Guile',
//   'Dhalsim', 'Dhalsim',
//   'Dhalsim', 'Guile',
//   'Dhalsim', 'Zangief',
//   'Blanka',  'Zangief',
//   'Zangief', 'Zangief',
//   'Zangief', 'Chun Li',
//   'Chun Li'
// ]