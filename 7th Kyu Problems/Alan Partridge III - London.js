/* Alan Partridge III - London
Backstory
Ever the learned traveller, Alan Partridge has pretty strong views on London:
"Go to London. I guarantee you'll either be mugged or not appreciated.
Catch the train to London, stopping at Rejection, Disappointment, Backstabbing Central 
and Shattered Dreams Parkway."

Task
Your job is to check that the provided list / array of stations contains all of the stops 
Alan mentions. The list of stops are as follows:

Rejection
Disappointment
Backstabbing Central
Shattered Dreams Parkway

If all the stops appear in the given list / array, return Smell my cheese you mother!, if not,
return No, seriously, run. You will miss it..
*/

// initial solution: 
// const alan = x => ['Rejection', 'Disappointment', 'Backstabbing Central', 'Shattered Dreams Parkway'].every(e => x.includes(e)) 
//     ? 'Smell my cheese you mother!' 
//     : 'No, seriously, run. You will miss it.';

const alan = x => {
    const count = x.reduce((sum, n) => (sum[n] = (sum[n] || 0) + 1, sum), {});
    return ['Rejection', 'Disappointment', 'Backstabbing Central', 'Shattered Dreams Parkway'].every(e => count[e])
        ? 'Smell my cheese you mother!' 
        : 'No, seriously, run. You will miss it.';
}

console.log(alan(['Norwich', 'Rejection', 'Disappointment', 'Backstabbing Central', 'Shattered Dreams Parkway', 'London'])) // 'Smell my cheese you mother!'
console.log(alan(['London', 'Norwich'])) // 'No, seriously, run. You will miss it.'
console.log(alan(['Norwich', 'Tooting', 'Bank', 'Rejection', 'Disappointment', 'Backstabbing Central', 'Exeter', 'Shattered Dreams Parkway', 'Belgium','London'])) // 'Smell my cheese you mother!'