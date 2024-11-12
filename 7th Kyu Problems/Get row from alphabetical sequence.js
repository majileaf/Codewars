/* Get row from alphabetical sequence
Task
Implement a function which takes a number N and returns the N'th row of the sequence below. 
If the argument is greater than the number of rows in the sequence, then start from the beginning again, 
e.g. row 27 is the same as row 1.

Sequence
1:  ABCDEFGHIJKLMNOPQRSTUVWXYZ
2:  BBCDEFGHIJKLMNOPQRSTUVWXYZ
3:  CCCDEFGHIJKLMNOPQRSTUVWXYZ
4:  DDDDEFGHIJKLMNOPQRSTUVWXYZ
5:  EEEEEFGHIJKLMNOPQRSTUVWXYZ
6:  FFFFFFGHIJKLMNOPQRSTUVWXYZ
7:  GGGGGGGHIJKLMNOPQRSTUVWXYZ
8:  HHHHHHHHIJKLMNOPQRSTUVWXYZ
9:  IIIIIIIIIJKLMNOPQRSTUVWXYZ
10: JJJJJJJJJJKLMNOPQRSTUVWXYZ
11: KKKKKKKKKKKLMNOPQRSTUVWXYZ
12: LLLLLLLLLLLLMNOPQRSTUVWXYZ
13: MMMMMMMMMMMMMNOPQRSTUVWXYZ
14: NNNNNNNNNNNNNNOPQRSTUVWXYZ
15: OOOOOOOOOOOOOOOPQRSTUVWXYZ
16: PPPPPPPPPPPPPPPPQRSTUVWXYZ
17: QQQQQQQQQQQQQQQQQRSTUVWXYZ
18: RRRRRRRRRRRRRRRRRRSTUVWXYZ
19: SSSSSSSSSSSSSSSSSSSTUVWXYZ
20: TTTTTTTTTTTTTTTTTTTTUVWXYZ
21: UUUUUUUUUUUUUUUUUUUUUVWXYZ
22: VVVVVVVVVVVVVVVVVVVVVVWXYZ
23: WWWWWWWWWWWWWWWWWWWWWWWXYZ
24: XXXXXXXXXXXXXXXXXXXXXXXXYZ
25: YYYYYYYYYYYYYYYYYYYYYYYYYZ
26: ZZZZZZZZZZZZZZZZZZZZZZZZZZ
*/

const aSeq = [
  'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  'BBCDEFGHIJKLMNOPQRSTUVWXYZ',
  'CCCDEFGHIJKLMNOPQRSTUVWXYZ',
  'DDDDEFGHIJKLMNOPQRSTUVWXYZ',
  'EEEEEFGHIJKLMNOPQRSTUVWXYZ',
  'FFFFFFGHIJKLMNOPQRSTUVWXYZ',
  'GGGGGGGHIJKLMNOPQRSTUVWXYZ',
  'HHHHHHHHIJKLMNOPQRSTUVWXYZ',
  'IIIIIIIIIJKLMNOPQRSTUVWXYZ',
  'JJJJJJJJJJKLMNOPQRSTUVWXYZ',
  'KKKKKKKKKKKLMNOPQRSTUVWXYZ',
  'LLLLLLLLLLLLMNOPQRSTUVWXYZ',
  'MMMMMMMMMMMMMNOPQRSTUVWXYZ',
  'NNNNNNNNNNNNNNOPQRSTUVWXYZ',
  'OOOOOOOOOOOOOOOPQRSTUVWXYZ',
  'PPPPPPPPPPPPPPPPQRSTUVWXYZ',
  'QQQQQQQQQQQQQQQQQRSTUVWXYZ',
  'RRRRRRRRRRRRRRRRRRSTUVWXYZ',
  'SSSSSSSSSSSSSSSSSSSTUVWXYZ',
  'TTTTTTTTTTTTTTTTTTTTUVWXYZ',
  'UUUUUUUUUUUUUUUUUUUUUVWXYZ',
  'VVVVVVVVVVVVVVVVVVVVVVWXYZ',
  'WWWWWWWWWWWWWWWWWWWWWWWXYZ',
  'XXXXXXXXXXXXXXXXXXXXXXXXYZ',
  'YYYYYYYYYYYYYYYYYYYYYYYYYZ',
  'ZZZZZZZZZZZZZZZZZZZZZZZZZZ'
];

const getRow = n => aSeq[(n - 1) % 26];

// alternatively:
// const getRow = n => {
//   const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   return alphabet.slice((n - 1) % 26).padStart(26, alphabet[(n - 1) % 26]);
// }

console.log(getRow( 1)) // "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
console.log(getRow(26)) // "ZZZZZZZZZZZZZZZZZZZZZZZZZZ"
console.log(getRow(15)) // "OOOOOOOOOOOOOOOPQRSTUVWXYZ"
console.log(getRow(27)) // "ABCDEFGHIJKLMNOPQRSTUVWXYZ"