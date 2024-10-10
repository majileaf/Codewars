/* Upper <body> Strength
Alex is transitioning from website design to coding and wants to sharpen his skills with CodeWars.
He can do ten kata in an hour, but when he makes a mistake, he must do pushups. 
These pushups really tire poor Alex out, so every time he does them they take twice as long.
His first set of redemption pushups takes 5 minutes. 
Create a function, alexMistakes, that takes two arguments: the number of kata he needs to complete, 
and the time in minutes he has to complete them. 
Your function should return how many mistakes Alex can afford to make.
*/

const alexMistakes = (numberOfKata, timeLimit) => Math.floor(Math.log2((timeLimit - numberOfKata * 6) / 5 + 1));

console.log(alexMistakes(10, 120)) // 3
console.log(alexMistakes(11, 120)) // 3
console.log(alexMistakes(3, 45)) // 2
console.log(alexMistakes(8, 120)) // 3
console.log(alexMistakes(6, 60)) // 2
console.log(alexMistakes(9, 180)) // 4
console.log(alexMistakes(20, 125)) // 1
console.log(alexMistakes(20, 135)) // 2