/* Holiday V - SeaSick Snorkelling
Thanks to the effects of El Nino this year my holiday snorkelling trip was akin to being in a washing machine... 
Not fun at all.

Given a string made up of '~' and '_' representing waves and calm respectively, your job is to check whether a 
person would become seasick.

Remember, only the process of change from wave to calm will add to the effect (really wave peak to trough but 
this will do). Find out how many changes in level the string has and if that figure is more than 20% of the array, 
return "Throw Up", if less, return "No Problem".
*/

// initial solution:
// const seaSick = x => {
//     let count = 0;
//     for (let i = 0; i < x.length; i++) {
//         if (x[i] === '_' && x[i + 1] === '~' || x[i] === '~' && x[i + 1] === '_') count++;
//     }
//     return (count / x.length) > 0.2 ? 'Throw Up' : 'No Problem';
// }

const seaSick = x => {
    let count = 0;
    for (let i = 0; i < x.length; i++) {
        if (x[i] !== x[i + 1]) count++;
    }
    return ((count - 1) / x.length) > 0.2 ? 'Throw Up' : 'No Problem';
}

console.log(seaSick("~")) // "No Problem"
console.log(seaSick("_~~~~~~~_~__~______~~__~~_~~")) // "Throw Up"
console.log(seaSick("______~___~_")) // "Throw Up"