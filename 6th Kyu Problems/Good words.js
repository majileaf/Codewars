/* Good words
Remember before the arrival of smartphones, we have the dumbphones with keypad as shown below

-----------------------
|  1  | |  2  | |  3  |
|     | | ABC | | DEF |
-----------------------
-----------------------
|  4  | |  5  | |  6  |
| GHI | | JKL | | MNO |
-----------------------
-----------------------
|  7  | |  8  | |  9  |
|PQRS | | TUV | | WXYZ|
-----------------------
-----------------------
|  *  | |  0  | |  #  |
|     | |space| |     |
-----------------------

The purpose of this kata is to find words I can type quickly on this dumb keypad, hence good words. 
Good words herein have characters that are on the same pad, or vertical opposite the pad, or horizontally opposite the pad.

Example
If I typed J, any character that must follow J that will make the word good will be 5, K or L (on the same pad), 
any of 4, G H, I or 6, M, N, O (horizontally opposite), or any of 2, A, B, C or 8, T, U, V or 0, space(vertically opposite).

Jako is a good word, Jake is not! 5n3Y is a good word too!

TODO
Write a function good that takes a string as argument (case insensitive) and return true if the string is a good word and 
false otherwise. An empty strnig is a good word.
*/

const keypad = {
    1: [0, 0],
    2: [0, 1], A: [0, 1], B: [0, 1], C: [0, 1],
    3: [0, 2], D: [0, 2], E: [0, 2], F: [0, 2],
    4: [1, 0], G: [1, 0], H: [1, 0], I: [1, 0],
    5: [1, 1], J: [1, 1], K: [1, 1], L: [1, 1],
    6: [1, 2], M: [1, 2], N: [1, 2], O: [1, 2],
    7: [2, 0], P: [2, 0], Q: [2, 0], R: [2, 0], S: [2, 0],
    8: [2, 1], T: [2, 1], U: [2, 1], V: [2, 1],
    9: [2, 2], W: [2, 2], X: [2, 2], Y: [2, 2], Z: [2, 2],
    '*': [3, 0],
    0: [3, 1], ' ': [3, 1],
    '#': [3, 2]
}

const good = t => {
    t = t.toUpperCase();
    for (let i = 1; i < t.length; i++) {
        let [x0, y0] = keypad[t[i - 1]];
        let [x1, y1] = keypad[t[i]];
        if (Math.abs(x1 - x0) > 0 && Math.abs(y1 - y0) > 0) return false;
    }
    return true;
}

console.log(good("")) // true
console.log(good("Jako#One#Zone")) // true
console.log(good("MKO")) // true
console.log(good("*793#")) // true
console.log(good("5n3Y")) // true
console.log(good(" 0tZd1hJ")) // true
console.log(good("123654789#0*")) // true

console.log(good("Jake")) // false
console.log(good("This")) // false
console.log(good("*8#")) // false
console.log(good("1234567890*#")) // false