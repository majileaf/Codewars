/* Euclidean distance in n dimensions
Implement a function to calculate the distance between two points in n-dimensional space. 
The two points will be passed to your function as arrays of the same length.
*/

const euclideanDistance = (point1, point2) => Math.sqrt(point1.reduce((sum, _, i) => sum + (point2[i] - point1[i]) ** 2, 0));

console.log(euclideanDistance([-1], [2])) // 3
console.log(euclideanDistance([-1,2], [2,4])) // 3.605551275463989
console.log(euclideanDistance([-1,2,5], [2,4,9])) // 5.385164807134504