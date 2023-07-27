/* Food combinations
XKCD 1609 provides us with the following fun fact:

If anyone tries this on you, the best reply is a deadpan "Oh yeah, that's a common potato chip flavor in Canada."

Task:
Given an array containing a list of good foods, return a string containing the assertion that any two of the 
individually good foods are really good when combined.

eg: "You know what's actually really good? Pancakes and relish."

Examples:
Good_foods = ["Ice cream", "Ham", "Relish", "Pancakes", "Ketchup", "Cheese", "Eggs", "Cupcakes", "Sour cream", "Hot chocolate", "Avocado", "Skittles"]
actuallyReallyGood( Good_foods ) #  "You know what's actually really good? Pancakes and relish."
actuallyReallyGood( ['Peanut butter'] ) #  "You know what's actually really good? Peanut butter and more peanut butter."
actuallyReallyGood( [] ) #  "You know what's actually really good? Nothing!"

Notes:
There are many different valid combinations of 2 foods it doesn't matter which one you choose.
But there should be 2 different foods listed unless there was only one food given in the input array.
Capitalization should be correct, the first given food should be capitalized, but the second should not.
The input array should not be modified by the method.

The test cases for this kata are fairly complicated, see if you can trick them. (Then let me know about it in the discourse.)
*/

const actuallyReallyGood = foods => {
  if (foods.length === 0) return "You know what's actually really good? Nothing!";
  
  const randomNum1 = getRandomInt(0, foods.length);
  let food1 = foods[randomNum1];
  food1 = food1[0].toUpperCase()[0] + food1.slice(1).toLowerCase();

  const randomNum2 = getRandomInt(0, foods.length);
  const food2 = foods[randomNum2].toLowerCase();

  if (randomNum1 === randomNum2 || food1.toLowerCase() === food2) return `You know what's actually really good? ${food1} and more ${food2}.`;
  return `You know what's actually really good? ${food1} and ${food2}.`;
}

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

const Good_foods = ["Ice cream", "Ham", "Relish", "Pancakes", "Ketchup", "Cheese", "Eggs", "Cupcakes", "Sour cream", "Hot chocolate", "Avocado", "Skittles"]

console.log(actuallyReallyGood(Good_foods)) // "You know what's actually really good? Pancakes and relish."
console.log(actuallyReallyGood(['Peanut butter'])) // You know what's actually really good? Peanut butter and more peanut butter."
console.log(actuallyReallyGood([])) // You know what's actually really good? Nothing!"

console.log(actuallyReallyGood(['peanut butter'])) // "You know what's actually really good? Peanut butter and more peanut butter."
console.log(actuallyReallyGood([ 'spam', 'spam' ])) // "You know what's actually really good? Spam and more spam."