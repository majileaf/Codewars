/* JS Golfing #6: String Summation
Task:
Return the summation of the input strings with no more than 14 characters.
*/

// x=(a,b)=>Number(a) + Number(b)
x=(a,b)=>a- -b

console.log(x('10','20')) // 30
console.log(x('5','55')) // 60
console.log(x('1','2')) // 3
console.log(x('2','99')) // 101