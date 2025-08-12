/* Geometry Basics: Distance between points in 3D
This series of katas will introduce you to basics of doing geometry with computers.

Point objects have x, y, and z attributes. For Haskell there are Point data types described 
with record syntax with fields x, y, and z.

Write a function calculating distance between Point a and Point b.
*/

const distanceBetweenPoints = (a, b) => ((b.x - a.x) ** 2 + (b.y - a.y) ** 2 + (b.z - a.z) ** 2) ** (1 / 2);

console.log(distanceBetweenPoints(new Point(1, 3, 5), new Point(1, 3, 5))) // 0
console.log(distanceBetweenPoints(new Point(1, 3, 6), new Point(4, 3, 2))) // 5
console.log(distanceBetweenPoints(new Point(-10.2, 12.5, 8.4), new Point(0.3, 14.7, -2.8))) // 15.509030