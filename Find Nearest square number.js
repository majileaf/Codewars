/*
Your task is to find the nearest square number, 
nearest_sq(n), of a positive integer n.
*/

const nearestSq = n => Math.round(Math.sqrt(n)) ** 2;

console.log(nearestSq(1)) // 1
console.log(nearestSq(2)) // 1
console.log(nearestSq(10)) // 9
console.log(nearestSq(111)) // 121
console.log(nearestSq(9999)) // 10000