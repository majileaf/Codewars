/* Make a square box!
Given a number as a parameter (between 2 and 30), return an array containing strings which form a box.
Like this:

n = 5

[
  '-----',
  '-   -',
  '-   -',
  '-   -',
  '-----'
]
n = 3

[
  '---',
  '- -',
  '---'
]
*/

const box = n => ['-'.repeat(n), ...[...Array(n - 2)].map(e => '-' + ' '.repeat(n - 2) + '-'), '-'.repeat(n)];

// alternatively:
// const box = n => ['-'.repeat(n), ...Array(n - 2).fill('-' + ' '.repeat(n - 2) + '-'), '-'.repeat(n)];

console.log(box(5)) // ["-----", "-   -", "-   -", "-   -", "-----"]
console.log(box(2)) // ["--", "--"]
console.log(box(4)) // ["----", "-  -", "-  -", "----"]
console.log(box(6)) // ["------", "-    -", "-    -", "-    -", "-    -", "------"]
console.log(box(3)) // ["---", "- -", "---"]