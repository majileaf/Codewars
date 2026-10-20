/* Alfred's Laundry Robot
Alfred Pennyworth has created a robot to drop off Batman's leotards at the launderette, 
but he needs some help coding the robot's path-finding function through Gotham City.

Gotham City is laid out as a perfect 1 km × 1 km grid and is navigated using 
north, east, south, and west (n, e, s, w) commands. 

There are two launderettes for the robot to choose from, but unfortunately, the robot can sometimes get lost.

Write a function that returns true if the robot's final position is the location of either launderette, 
and false otherwise.

Launderette location 1: e, n, e, e, n.
Launderette location 2: w, n, w, n, w, w, n. 
*/

const pathFinding = path => {
    const launderetteA = [3, 2];
    const launderetteB = [-4, 3];
    
    let [x, y] = [0, 0];
    for (let i = 0; i < path.length; i++) {
        x += {w: -1, e: 1}[path[i]] || 0;
        y += {n: 1, s: -1}[path[i]] || 0;
    }
    return [launderetteA, launderetteB].some(([X, Y]) => x === X && y === Y);
}

console.log(pathFinding(['s', 'e', 'e', 'n', 'n', 'e', 'n'])) // true
console.log(pathFinding(['n', 's', 'n', 'n', 'e', 'n', 'w', 'w', 's', 'w', 'w', 'w', 'n'])) // true
console.log(pathFinding(['n', 's', 'n', 'n', 'n', 'e', 'n', 'w', 'n', 'w', 's', 'w', 'w', 'w', 'n'])) // false
console.log(pathFinding(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's', 'e', 'w', 'w'])) // false
console.log(pathFinding(['n', 'e', 's', 'w', 'n', 'e', 's', 'w', 'w', 's', 'n', 'e'])) // false