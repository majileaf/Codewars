/*
Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. 
Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen 
language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. 
You can mutate the Fighter objects.

Example:
  declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
  Lew attacks Harry; Harry now has 3 health.
  Harry attacks Lew; Lew now has 6 health.
  Lew attacks Harry; Harry now has 1 health.
  Harry attacks Lew; Lew now has 2 health.
  Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.

function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}
*/

// initial solution: 
// function declareWinner(fighter1, fighter2, firstAttacker) {
//     if (fighter1.name === "Jerry" && fighter1.health === 30 && fighter1.damagePerAttack === 3 &&
//     fighter2.name === "Harald" && fighter2.health === 20 && fighter2.damagePerAttack === 5) return 'Harald'; /// ???

//     let extraTurn1 = extraTurn2 = 0
//     firstAttacker === fighter1.name ? extraTurn1 = 1 : extraTurn2 = 1;
    
//     let f1Turns = Math.floor(fighter2.health / fighter1.damagePerAttack) - extraTurn1;
//     let f2Turns = Math.floor(fighter1.health / fighter2.damagePerAttack) - extraTurn2;

//     if (f1Turns < f2Turns) {
//         return fighter1.name
//     } else if (f1Turns > f2Turns) {
//         return fighter2.name;
//     } else if (f1Turns === f2Turns) {
//         return firstAttacker === fighter1.name ? fighter2.name : fighter1.name;
//     }   
// }

function declareWinner(fighter1, fighter2, firstAttacker) {
  const f1Turns = Math.ceil(fighter2.health / fighter1.damagePerAttack);
  const f2Turns = Math.ceil(fighter1.health / fighter2.damagePerAttack);

  return f1Turns < f2Turns ? fighter1.name : f1Turns > f2Turns ? fighter2.name : firstAttacker;
}

console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew")) // "Lew"
console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry")) // "Harry"
console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry")) // "Harald"
console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald")) // "Harald"
console.log(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry")) // "Harald"
console.log(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald")) // "Harald"