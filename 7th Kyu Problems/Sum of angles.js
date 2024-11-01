/* Sum of angles
Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2
*/

const angle = n => 180 * (n - 2);

console.log(angle(3)) // 180
console.log(angle(4)) // 360