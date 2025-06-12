/* Geometry Basics: Distance between points in 2D
This series of katas will introduce you to basics of doing geometry with computers.

Point objects have attributes x and y.

Write a function calculating distance between Point a and Point b.

Input coordinates fit in range −50⩽x,y⩽50 -50 \leqslant x,y \leqslant 50 −50⩽x,y⩽50. 
Tests compare expected result and actual answer with tolerance of 1e-6.
*/

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const distanceBetweenPoints = (a, b) => Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);

console.log(distanceBetweenPoints(new Point(    3,    3), new Point(  3,    3))) //         0
console.log(distanceBetweenPoints(new Point(    1,    6), new Point(  4,    2))) //         5
console.log(distanceBetweenPoints(new Point(-10.2, 12.5), new Point(0.3, 14.7))) // 10.728001