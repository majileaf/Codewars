/* 99 Bottles of Beer
Instructions

Complete the function that returns the lyrics for the song 99 Bottles of Beer as an array of strings: 
each line should be a separate element - see the example at the bottom.

Note: in order to avoid hardcoded solutions, the size of your code is limited to 1000 characters

Lyrics
    99 bottles of beer on the wall, 99 bottles of beer.
    Take one down and pass it around, 98 bottles of beer on the wall.

    98 bottles of beer on the wall, 98 bottles of beer.
    Take one down and pass it around, 97 bottles of beer on the wall.

    ...and so on...

    3 bottles of beer on the wall, 3 bottles of beer.
    Take one down and pass it around, 2 bottles of beer on the wall.

    2 bottles of beer on the wall, 2 bottles of beer.
    Take one down and pass it around, 1 bottle of beer on the wall.

    1 bottle of beer on the wall, 1 bottle of beer.
    Take one down and pass it around, no more bottles of beer on the wall.

    No more bottles of beer on the wall, no more bottles of beer.
    Go to the store and buy some more, 99 bottles of beer on the wall.

Example
[ "99 bottles of beer on the wall, 99 bottles of beer.",
  "Take one down and pass it around, 98 bottles of beer on the wall.",
  "98 bottles of beer on the wall, 98 bottles of beer.",

  ...and so on...

  "3 bottles of beer on the wall, 3 bottles of beer.",
  "Take one down and pass it around, 2 bottles of beer on the wall.",
  "2 bottles of beer on the wall, 2 bottles of beer.",
  "Take one down and pass it around, 1 bottle of beer on the wall.",
  "1 bottle of beer on the wall, 1 bottle of beer.",
  "Take one down and pass it around, no more bottles of beer on the wall.",
  "No more bottles of beer on the wall, no more bottles of beer.",
  "Go to the store and buy some more, 99 bottles of beer on the wall." ]
*/

const checkPlural = n => n === 1 ? '' : 's';
const sing = _ => {
    const arr = [];
    for (let i = 99; i >= 0; i--) {
        arr.push(`${i || 'No more'} bottle${checkPlural(i)} of beer on the wall, ${i || 'no more'} bottle${checkPlural(i)} of beer.`);
        arr.push(i ? `Take one down and pass it around, ${i - 1 || 'no more'} bottle${checkPlural(i - 1)} of beer on the wall.` : 'Go to the store and buy some more, 99 bottles of beer on the wall.');
    }
    return arr;
};

console.log(sing());