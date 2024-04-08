/* Cogs 2
Kata Task
You are given a list of cogs in a gear train

Each element represents the number of teeth of that cog

e.g. [100, 50, 25] means

1st cog has 100 teeth
2nd cog has 50 teeth
3rd cog has 25 teeth
If the nth cog rotates clockwise at 1 RPM what is the RPM of the cogs at each end of the gear train?

Notes

no two cogs share the same shaft
return an array whose two elements are RPM of the first and last cogs respectively
use negative numbers for anti-clockwise rotation
for convenience n is zero-based
For C and NASM coders, the returned array will be free'd.
*/

const cogRpm = (cogs, n) => {
  const rRpm = cogs[n] / cogs[cogs.length - 1];
  const lRpm = cogs[n] / cogs[0];
  const sign = arr => (x, y) => arr.slice(x, y + 1).length % 2 ? 1 : -1;
  return [sign(cogs)(0, n) * lRpm, sign(cogs)(n, cogs.length) * rRpm];
}

// alternatively:
// const cogRpm = (cogs, n) => {
//   const lRpm = cogs[n] / cogs[0];
//   const rRpm = cogs[n] / cogs[cogs.length - 1];
//   return [(-1) ** n * lRpm, (-1) ** (cogs.length - n) * rRpm];
// }

console.log(cogRpm([100, 50, 25], 1)) // [-0.5, -2]
console.log(cogRpm([100, 100, 50, 25], 2)) // [0.5, -2]
console.log(cogRpm([100, 100, 100, 100], 0)) // [1, -1]
console.log(cogRpm([77, 54, 47, 51, 81, 79, 62, 40, 48, 28, 66, 70, 76], 2)) // [0.6103896103896104, 0.618421052631579]
console.log(cogRpm([80, 38, 87, 28, 71, 58, 94, 74, 98, 68, 19, 54, 67, 97, 87], 1)) // [-0.475, -0.4367816091954023]
console.log(cogRpm([65, 14, 100, 53, 73, 20, 73,  39, 74, 14], 2)) // [1.5384615384615385, -7.142857142857143]
console.log(cogRpm([77, 54, 18, 29, 94, 60, 90, 92, 32, 92, 42], 1)) // [-0.7012987012987013, -1.2857142857142858]
console.log(cogRpm([20, 69], 0)) // [1, -0.2898550724637681]