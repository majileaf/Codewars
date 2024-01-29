/* Count strings in objects
Create a function strCount (takes an object as argument) that will count all string values inside an object. 

For example:
strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime",2,3,4],
  fifth:  null
  })
  //returns 3
*/

// const strCount = (obj, i = 0) => typeof obj === 'string' 
//     ? i = i + 1 
//     : i + (Object.prototype.toString.call(obj) == '[object Object]' || Array.isArray(obj) 
//         ? Object.values(obj).reduce((sum, n) => sum + (typeof n === 'string' ? 1 : strCount(n)), 0) 
//         : 0);

// alternatively:
const strCount = obj => typeof obj === 'string' 
    ? 1
    : Object.values(obj || {}).reduce((sum, n) => sum + strCount(n), 0);

console.log(strCount(null)); // 0
console.log(strCount(undefined)); // 0
console.log(strCount('asd')); // 1
console.log(strCount({
    first:  "1",
    second: "2",
    third:  false,
    fourth: ["anytime",2,3,4],
    // fifth:  null,
    // sixth:  undefined,
    seventh:{}
  })); // 3

console.log(strCount({
    first:  "1",
    second: "2",
    third:  false,
    fourth: ["anytime",2,3,4],
    fifth:  null,
    sixth:  undefined,
    seventh:{}
  })); // 3

console.log(strCount(["anytime", 'yes',3,4])) // 2
console.log(strCount(["anytime", 'yes', ['asd', 'dsa', ['asd']], 4])) // 5