/* Nonogram Row Clues (Single Line)
Nonogram Row Clues

A Nonogram (also known as Picross or Griddlers) is a puzzle where each row or column is described by numbers called clues.
Each clue represents the length of a group of consecutive filled cells.

In this kata, you must implement a function that takes a string representing a single row of a Nonogram, and returns an array with its clues.
    # or X = filled cell
    . = empty cell
    Spaces must be ignored
    Any other non-space character is treated as empty
    If there are no filled cells, return [0]

Examples
nonogramClues("#..###.#")      // [1, 3, 1]
nonogramClues("....")          // [0]
nonogramClues("##.#.####")     // [2, 1, 4]
nonogramClues("")              // [0]
nonogramClues("X.X.##")        // [1, 1, 2]
nonogramClues("  #  #  .  #")  // [1, 1, 1]

Input
A string containing ., #, X, spaces, or other characters.

Output
An array of integers representing the lengths of filled groups. If no group is found, return [0].
*/

const nonogramClues = line => line.match(/[X#]+/g)?.map(e => e.length) || [0];

console.log(nonogramClues("#..###.#")) // [1, 3, 1]
console.log(nonogramClues("....")) // [0]
console.log(nonogramClues("##.#.####")) // [2, 1, 4]
console.log(nonogramClues("")) // [0]
console.log(nonogramClues("X.X.##")) // [1, 1, 2]
console.log(nonogramClues("  #  #  .  #")) // [1, 1, 1]