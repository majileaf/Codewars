/* Complete The Pattern #6 - Odd Ladder
Task:
You have to write a function which creates the following odd-numbers staircase pattern up to the desired number of rows.
    If the input is <= 0, return an empty string
    If the input is even, round it down to the odd number that precedes it.
    There are no spaces in the pattern
    The lines are separated by a newline character (\n)

Examples:
pattern(9):
1
333
55555
7777777
999999999

pattern(6):
1
333
55555
*/

const pattern = n => n < 1 
    ? '' 
    : [...Array(Math.floor((n + 1) / 2))]
        .map((_, i) => `${2 * i + 1}`.repeat(2 * i + 1))
        .join('\n');

console.log(pattern(4)) // "1\n333"
console.log(pattern(1)) // "1"
console.log(pattern(5)) // "1\n333\n55555"
console.log(pattern(0)) // ""
console.log(pattern(-25)) // ""