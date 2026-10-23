/* Phone Screen Organizer
When you delete an app on your phone, a blank space is left behind. I find these to be unsightly, 
so I try to fill that space. Initially, I thought a decent strategy for dealing with this would be 
moving over all of the apps after this spot over to the left, but this could be quite time-consuming 
if you had, say, 100 apps!

So, I thought of a better solution: take the app furthest to the right and put it in the empty spot. 
This way, we only have to move as many apps as there are empty spaces!

Given an array of Objects, perform the described algorithm, with null references representing empty spaces. 
Return a resized array with no trailing or leading nulls so that is just big enough for all of the actual apps.
*/

const rearrangeApps = tiles => {
    if (tiles.every(e => e === null)) return [];
    tiles = tiles.slice();

    while (tiles.includes(null)) {
        let idx = tiles.findLastIndex(e => e !== null);
        let right = tiles[idx];
        tiles.splice(idx, 1);
        tiles.splice(tiles.indexOf(null), 1, right);
    }
    return tiles;
}

console.log(rearrangeApps(['Codewars'])) // ['Codewars']
console.log(rearrangeApps([null])) // []
console.log(rearrangeApps([null, 'Codewars'])) // ['Codewars']
console.log(rearrangeApps([null, 'Firefox', 'Maps'])) // ['Maps', 'Firefox']
console.log(rearrangeApps([null, 'Clock', null, null, 'Settings', 'Files'])) // ['Files', 'Clock', 'Settings']