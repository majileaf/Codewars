/* Turn with a Compass
You have an 8-wind compass, like this:

You receive the direction you are facing (one of the 8 directions: N, NE, E, SE, S, SW, W, NW) and 
a certain degree to turn (a multiple of 45, between -1080 and 1080); positive means clockwise, and 
negative means counter-clockwise.

Return the direction you will face after the turn.

Examples
"S",  180  -->  "N"
"SE", -45  -->  "E"
"W",  495  -->  "NE"
*/

const direction = (facing, turn) => {
    const dir = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    return dir[(8 + dir.indexOf(facing) + (turn % 360) / 45) % 8];
}

console.log(direction("S", 180)) // "N"
console.log(direction("SE", -45)) //"E"
console.log(direction("W", 495)) // "NE"
console.log(direction("N", -450)) // "W"