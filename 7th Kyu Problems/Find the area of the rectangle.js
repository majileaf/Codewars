/* Find the area of the rectangle!
Find the area of a rectangle given its diagonal and one side. 
If the diagonal is less than or equal to the side length, return "Not a rectangle". 
*/

const area = (d, l) => d > l ? Math.sqrt(d ** 2 - l ** 2) * l : 'Not a rectangle';

console.log(area(5, 4)) // 12
console.log(area(10, 6)) // 48
console.log(area(13, 5)) // 60
console.log(area(12, 5)) // 54.54356057317857

console.log(area(4, 4)) // 'Not a rectangle'