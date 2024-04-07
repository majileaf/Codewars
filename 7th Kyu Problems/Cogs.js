/* Cogs
Kata Task
You are given a list of cogs in a gear train

Each element represents the number of teeth of that cog

e.g. [100, 75] means
1st cog has 100 teeth
2nd cog has 75 teeth

If the first cog rotates clockwise at 1 RPM what is the RPM of the final cog?
(use negative numbers for anti-clockwise rotation)

Notes
no two cogs share the same shaft
*/

const cogRpm = cogs => cogs.slice(1).reduce((sum, _, i) => sum * (- cogs[i] / cogs[i + 1]), 1);

// alternatively:
// const cogRpm = c => (c.length % 2 ? 1 : -1) * c[0] / c[c.length - 1];

console.log(cogRpm([100, 75])) // -4/3