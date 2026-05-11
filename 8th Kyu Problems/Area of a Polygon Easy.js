/* Area of a Polygon (Easy)
Write the function polygonArea(A,B,C,D) that finds the area of polygons of this type:

    Assume D always equals B/2.
    Assume the angles formed by AB and BC are right angles.
*/

const polygonArea = (A, B, C, D) => A * B + (B / 2) * (C - A);

console.log(polygonArea(2, 4, 4, 2)) // 12
console.log(polygonArea(0, 0, 0, 0)) // 0
console.log(polygonArea(2, 5, 10, 2.5)) // 30