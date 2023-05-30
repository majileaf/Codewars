/* Quadrants
Given a point in a Euclidean plane (x and y), return the quadrant the point exists in: 
1, 2, 3 or 4 (integer). x and y are non-zero integers, therefore the given point never 
lies on the axes.

Examples
(1, 2)     => 1
(3, 5)     => 1
(-10, 100) => 2
(-1, -9)   => 3
(19, -56)  => 4

Reference: https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Cartesian_coordinates_2D.svg/300px-Cartesian_coordinates_2D.svg.png

There are four quadrants:
First quadrant, the quadrant in the top-right, contains all points with positive X and Y
Second quadrant, the quadrant in the top-left, contains all points with negative X, but positive Y
Third quadrant, the quadrant in the bottom-left, contains all points with negative X and Y
Fourth quadrant, the quadrant in the bottom-right, contains all points with positive X, but negative Y
*/

const quadrant = (x, y) => (x > 0) ? (y > 0) ? 1 : 4 : (y > 0) ? 2 : 3;

console.log(quadrant(1, 2))     // 1
console.log(quadrant(3, 5))     // 1
console.log(quadrant(-10, 100)) // 2
console.log(quadrant(-1, -9))   // 3
console.log(quadrant(19, -56))  // 4