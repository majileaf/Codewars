/* Get Password from grid
In this kata you are expected to recover a scattered password in a (m x n) grid (you'll be given directions of 
all password pieces in the array)

The array will contain pieces of the password to be recovered, you'll get directions on how to get all the the pieces, 
your initial position in the array will be the character "x".

Heres what the array looks like
[
  ["p", "x", "m"],
  ["a", "$", "$"],
  ["k", "i", "t"]
]

The given directions would consist of [left, right, up, down] and [leftT, rightT, upT, downT], 
the former would be used to move around the grid while the latter would be used when you have 
a password to that direction of you.( E.g if you are in a position and the move to make is leftT 
it means theres a password to the left of you, so take the value and move there)

So in the 2d array example above, you will be given the directions ["lefT", "downT", "rightT", "rightT"], 
making for the word "pa$$".

Remember you initial position is the character "x".

So you write the function getPassword(grid, directions) that uses the directions to get a password in the grid.

Another example.

grid = [
  ["a", "x", "c"],
  ["g", "l", "t"],
  ["o", "v", "e"]
];

directions = ["downT", "down", "leftT", "rightT", "rightT", "upT"]

getPassword(grid, directions) // => "lovet"

Once again, Your initial position is the character "x", so from the position of "x" you follow the directions given and 
get all pieces in the grid.
*/

const getX = arr => {
    for (let y = 0; y < arr.length; y++) {
        for (let x = 0; x < arr[0].length; x++) {
            if (arr[y][x] === 'x') return [y, x];
        }
    }
}

const getPassword = (grid, directions) => {
    let [y, x] = getX(grid);
    let pass = '';

    for (const direction of directions) {
        switch (direction) {
            case 'leftT':
            case 'left': x--; break;
            case 'rightT':
            case 'right': x++; break;
            case 'upT':
            case 'up': y--; break;
            case 'downT':
            case 'down': y++;
        }
        if (direction.at(-1) === 'T') pass += grid[y][x];
    }
    return pass;
}

let grid = [
    ["x", "l", "m"],
    ["o", "f", "c"],
    ["k", "i", "t"]
];
let directions = ["rightT", "down", "leftT", "right", "rightT", "down", "left", "leftT"];
console.log(getPassword(grid, directions)) // "lock"

grid = [
  ["a", "x", "c"],
  ["g", "l", "t"],
  ["o", "v", "e"]
];
directions = ["downT", "down", "leftT", "rightT", "rightT", "upT"]
console.log(getPassword(grid, directions)) // "lovet"
