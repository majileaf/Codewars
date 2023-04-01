/* Ghostbusters (whitespace removal)
Oh no! Ghosts have reportedly swarmed the city. It's your job to get rid of them and save the day!
In this kata, strings represent buildings while whitespaces within those strings represent ghosts.
So what are you waiting for? Return the building(string) without any ghosts(whitespaces)!

Example:
ghostBusters("Sky scra per");
Should return:

"Skyscraper"
If the building contains no ghosts, return the string:

"You just wanted my autograph didn't you?"
*/

// initial solution:
// const ghostBusters = building => {
//     const removed = building.replace(/\s/g, '');
//     return removed === building ? "You just wanted my autograph didn't you?" : removed;
// }

const ghostBusters = building => /\s/.test(building) 
    ? building.replace(/\s/g, '') 
    : "You just wanted my autograph didn't you?";

console.log(ghostBusters("Factor y")) // "Factory"
console.log(ghostBusters("O  f fi ce")) // "Office"
console.log(ghostBusters("BusStation")) // "You just wanted my autograph didn't you?"