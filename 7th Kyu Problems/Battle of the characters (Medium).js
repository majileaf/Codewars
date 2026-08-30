/* Battle of the characters (Medium)
Groups of characters decided to make a battle. Help them to figure out what group is more powerful. 
Create a function that will accept 2 variables and return the one who's stronger.

Rules
    Each character has its own power:

      A = 1, B = 2, ... Y = 25, Z = 26
      a = 0.5, b = 1, ... y = 12.5, z = 13

    Only alphabetical characters can and will participate in a battle.
    Only two groups to a fight.
    Group whose total power (a + B + c + ...) is bigger wins.
    If the powers are equal, it's a tie.

Examples
"One", "Two"  -->  "Two"
"ONE", "NEO"  -->  "Tie!"
*/

const getPower = str => [...str].reduce((sum, n) => sum + (n.toUpperCase().charCodeAt() - 64) / (n === n.toUpperCase() ? 1 : 2), 0);

const battle = (x, y) => {
    const countX = getPower(x);
    const countY = getPower(y);
    return countX > countY ? x : 
           countX < countY ? y :
           'Tie!';
}

console.log(battle("One", "Two")) // "Two"
console.log(battle("One", "Neo")) // "One"
console.log(battle("One", "neO")) // "Tie!"
console.log(battle("Foo", "BAR")) // "Tie!"
console.log(battle("Four", "Five")) // "Four"