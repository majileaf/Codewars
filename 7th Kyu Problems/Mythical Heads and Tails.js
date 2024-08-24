/* Mythical Heads and Tails
You're in ancient Greece and giving Philoctetes a hand in preparing a training exercise for Hercules! 
You've filled a pit with two different ferocious mythical creatures for Hercules to battle!

Orthus
Hydra

The formidable "Orthus" is a 2 headed dog with 1 tail. The mighty "Hydra" has 5 heads and 1 tail.
Before Hercules goes in, he asks you "How many of each beast am I up against!?".

You know the total number of heads and the total number of tails, that's the dangerous parts, right? 
But you didn't consider how many of each beast.

Task
Given the number of heads and the number of tails, work out the number of each mythical beast!

The data is given as two parameters. Your answer should be returned as an array:

 VALID ->      [24 , 15]           INVALID ->  "No solutions"
            [Orthus, Hydra]

If there aren't any cases for the given amount of heads and tails - return "No solutions" or null (C#).
*/

const beasts = (heads, tails) => {
  const hydra = (heads - 2 * tails) / 3;
  const orthus = tails - hydra;
  return hydra % 1 !== 0 || hydra < 0 || orthus < 0 ? 'No solutions' : [orthus, hydra];
}

console.log(beasts(123, 39)) // [24, 15]
console.log(beasts(371, 88)) // [23, 65]
console.log(beasts(24, 12)) // [12, 0]
console.log(beasts(113, 37)) // [24, 13]
console.log(beasts(635, 181)) // [90, 91]
console.log(beasts(25, 555)) // "No solutions"
console.log(beasts(12, 25)) // "No solutions"
console.log(beasts(54, 956)) // "No solutions"