/* The Baby Years I - Baby Counting
You've had a baby.

Well done. Nice isn't it? Life destroying... but in a good way.

Part of your new routine is lying awake at night worrying that you've either lost the baby... 
or that you have more than 1!

Given a string of words (x), you need to calculate how many babies are in it. 
To count as a baby you must have all of the letters in baby ('b', 'a', 'b', 'y'). 
That counts as 1. They do not need to be in order in the string. Upper and lower case letters count.

Examples:
"baby" = 1
"abby" = 1
"babybaby" = 2
"Why the hell are there so many babies?!" = 1
"Anyone remember life before babies?" = 1
"Happy babies boom ba by?" = 2

If there are no babies in the string - you lost the baby!! Return a different value, as shown below:

'none here' = "Where's the baby?!" '' = "Where's the baby?!"
*/

const babyCount = x => {
    const count = [...x.toLowerCase()].reduce((sum, n) => (sum[n] = (sum[n] || 0) + 1, sum), {});
    const n = Math.min(Math.floor(count['b'] / 2), count['a'], count['y']);
    return n || 'Where\'s the baby?!';
}

console.log(babyCount('baby')) // 1
console.log(babyCount('abby')) // 1
console.log(babyCount('baby baby baby')) // 3
console.log(babyCount('Why the hell are there so many babies?!')) // 1
console.log(babyCount('Anyone remember life before babies?')) // 1
console.log(babyCount('Happy babies boom ba by?')) // 2
console.log(babyCount('b a b y')) // 1
console.log(babyCount('')) // 'Where\'s the baby?!'
console.log(babyCount('none here')) // 'Where\'s the baby?!'