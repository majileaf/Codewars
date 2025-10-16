/* Simple directions reversal
In this Kata, you will be given directions and your task will be to find your way back.

solve(["Begin on Road A","Right on Road B","Right on Road C","Left on Road D"]) = ['Begin on Road D', 'Right on Road C', 'Left on Road B', 'Left on Road A']
solve(['Begin on Lua Pkwy', 'Right on Sixth Alley', 'Right on 1st Cr']) =  ['Begin on 1st Cr', 'Left on Sixth Alley', 'Left on Lua Pkwy']

More examples in test cases.

Good luck!
*/

const reverseDir = {'Right': 'Left', 'Left': 'Right', 'Begin' : 'Begin'};
const solve = arr => {
    const dir = ['Begin', ...(arr.join('').match(/Right|Left/g) || []).reverse()];
    return arr.slice().reverse().map((e, i) => e.replace(/Begin|Right|Left/, char => reverseDir[dir[i]]));
}

console.log(solve(['Begin on 3rd Blvd', 'Right on First Road', 'Left on 9th Dr'])) // ['Begin on 9th Dr', 'Right on First Road', 'Left on 3rd Blvd']
console.log(solve(["Begin on Road A","Right on Road B","Right on Road C","Left on Road D"])) // ['Begin on Road D', 'Right on Road C', 'Left on Road B', 'Left on Road A']
console.log(solve(['Begin on Road A'])) // ['Begin on Road A']