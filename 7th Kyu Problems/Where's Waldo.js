/* Where's Waldo?
Puzzle
If you don't know who Waldo is, he's a nice guy who likes to be in crowded places. 
But he's also a bit odd as he always likes to hide in plain sight. 
Can you spot Waldo in the crowd?

Task
Given crowd, an array of strings of equal length, representing a crowded place, 
return an array with two integers representing the coordinates [y, x] where Waldo 
can be found ([0, 0] is top-left, y being the row and x being the column ).

Examples
We've spotted Waldo a couple of times in the past. Below is what we found out.
 Note that he's been in much more crowded places lately.

#1 Waldo at the beach
"             "          Air
"         w   "           Air with a bird
"   w         "           Air with a bird
"~~~~~~~~~~~~~"           Sea
".~..~~.~~~..~"           Waves on beach
"...P......P.."           Beach with some people
"......P..P..."           Beach with some people
"..PW........."           Beach with Waldo and presumably a friend next to him

Unredacted report: Waldo can be found at [7, 3], wearing his usual outfit

#2 Waldo visiting the Great Pyramid
"                              "          Air
"                              "           Air
"            _                 "           Top of pyramid
"          _____               "           Layer of pyramid
"        _________             "           Layer of pyramid
"  B  _______________   G   GG "           Ground layer of pyramid with several people, including Waldo

Unredacted report: Waldo can be found at [5, 2], wearing special clothes protecting him from the sun

Hints
- he isn't always wearing his usual clothes
- why is there more than one bird in the first example ...
*/

// initial solution:
// const findWaldo = crowd => {
//   const str = crowd.join('');
//   const count = [...str].reduce((sum, n) => (sum[n] = (sum[n] || 0) + 1, sum), {});
//   const waldo = Object.keys(count).find(e => count[e] === 1);
//   const waldoIdx = str.indexOf(waldo);
//   return [Math.floor(waldoIdx / crowd[0].length) , waldoIdx % crowd[0].length];
// }

const findWaldo = crowd => {
  const str = crowd.join('');
  const waldoIdx = [...str].findIndex(e => str.indexOf(e) === str.lastIndexOf(e));
  return [Math.floor(waldoIdx / crowd[0].length) , waldoIdx % crowd[0].length];
}

console.log('---');

// 'Should find Waldo at the beach' [7, 3] - 'W'
let crowd = [
"             ",           // Air
"         w   ",           // Air with a bird
"   w         ",           // Air with a bird
"~~~~~~~~~~~~~",           // Sea
".~..~~.~~~..~",           // Waves on beach
"...P......P..",           // Beach with some people
"......P..P...",           // Beach with some people
"..PW........."            // Beach with Waldo and presumably a friend next to him
];
console.log(findWaldo(crowd));

// 'Should find Waldo at the pyramid' [5, 2] - 'B'
crowd = [
"                              ",           // Air
"                              ",           // Air
"            _                 ",           // Top of pyramid
"          _____               ",           // Layer of pyramid
"        _________             ",           // Layer of pyramid
"  B  _______________   G   GG "            // Ground layer of pyramid with several people, including Waldo
];
console.log(findWaldo(crowd));

// 'Should find Waldo at the beach' - reloaded [5, 6] - 'K'
crowd = [
'   W         ',
'         w   ',
'   w    W    ',
'~~~~~~~~~~~~~',
'....~~...~..~',
'.A.P..K.e.P.F',
'..#.FfeP.kPk.',
'..Pf..f.fAA#.'
]
console.log(findWaldo(crowd));

// 'Should find Waldo at the beach' - reloaded [6, 9] - 'X'
crowd = [
  '     w       ',
  '           w ',
  '            w',
  '~~~~~~~~~~~~~',
  '~~~.~~~~~~~.~',
  'A...q..AAA.T.',
  '...o.q.ooX.TT',
  'oAA.oq.A..qTo'
]
console.log(findWaldo(crowd));

// 'Should find Waldo at the beach' - reloaded [7, 0] - 'Z'
crowd = [
'  W        W', 
'W           ',
'    W       ', 
'           W',
'            ', 
'~~~~~~~~~~~~',
'~~.....~~~.~', 
'Z.......O...',
'gg........v.', 
'.O.......gv.',
'.O...Og.....', 
'O....v.....O'
]
console.log(findWaldo(crowd));

// 'Should find Waldo at the beach' - reloaded [8, 17] - 't'
crowd = [
' W      W W W  W         ',
'W          W    w  w W  w',
'        w       w        ',
'w     W   W     W   W   w',
'       ww w   w    W    W',
'  W     W  w W           ',
'~~~~~~~~~~~~~~~~~~~~~~~~~',
'~..~~~~~~~~~~~.~..~~.~..~',
'e......Sdj.....e.tj..d..d',
'..S.eS....b...bL..L.L....',
'...VjSLe.....j.e.j.....b.',
'b...bdS.S..b...bj..eVe...'
]
console.log(findWaldo(crowd));

// 'Should find Waldo at the beach' - reloaded [5, 27] - 'd'
crowd = [
' W              w            w          ',
' w W    W W                W        W   ',
'    W                                   ',
'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
'..~~.~.~~~~..~~~.~~.~.~~~.~~.~~.~~.~~~~~',
'H....OOOOyHH.OO.OH.O...H..yd.y..Gy.OHyHH',
'H.O.GGyHG.Hyy.OGOGG.G..yy...O....H..G.OO',
'G..GOG..y.H..G.yy.yHGyO......yH.OGGO..Gy'
]
console.log(findWaldo(crowd));