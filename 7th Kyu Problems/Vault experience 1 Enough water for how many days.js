/* Vault experience (1): Enough water for how many days?
Hello dweller,

I'm the overseer of our vault, in which we all live.

I make it short: We are out of water. The only question is when!
Here is a list of all dwellers with their respective age int[] ageOfDweller.
In our tank currently are int water liters of water.
I want to know from you: How long will rich our supplies.

Remember!
Each dweller has a different water consumption.
A dweller under 18 consumes 1 liter per day, everyone older than 50 needs 1.5 liters and the rest needs 2 liters per day.
Each dweller must get its prescribed ration of water, every day!
If not satisfied all dweller, then our days are numbered.

Good luck! I'll bet on you!

Note from Vault Technicians:
Your program returns a positive integer. The residual water is not calculated.
return -1; - If no dweller living inside of the Vault.
*/

const thirstyIn = (water, ageOfDwellerArray) => {
    const total = ageOfDwellerArray.reduce((sum, n) => sum + (n < 18 ? 1 : n > 50 ? 1.5 : 2), 0);
    return total ? Math.floor(water / total) : -1;
}

console.log(thirstyIn(150, [ 5, 30, 10 ])) // 37
console.log(thirstyIn(150, [])) // -1