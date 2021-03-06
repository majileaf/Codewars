/*
Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

parse("iiisdoso") => [ 8, 64 ]
*/

// Return the output array, and ignore all non-op characters
const parse = data => [...data].reduce((sum, n) => {
    switch(n) {
        case 'i': count++; break;
        case 'd': count--; break;
        case 's': count = count**2; break;
        case 'o': sum.push(count);
    }
    return sum;
} , (count = 0, []))

console.log(parse("iiisdoso")) // [ 8, 64 ]
console.log(parse("iiisxxxdoso")) // [ 8, 64 ]