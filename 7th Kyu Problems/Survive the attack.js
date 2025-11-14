/* Survive the attack
Given two Arrays in which values are the power of each soldier, return true if you survive the attack or false if you perish.

CONDITIONS
    Each soldier attacks the opposing soldier in the same index of the array. The survivor is the number with the highest value.
        If the value is the same they both perish
        If one of the values is empty(different array lengths) the non-empty value soldier survives.
    To survive the defending side must have more survivors than the attacking side.
    In case there are the same number of survivors in both sides, the winner is the team with the highest initial attack power. If the total attack power of both sides is the same return true.
        The initial attack power is the sum of all the values in each array.

EXAMPLES
attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4, 6, 8 ]  
//0 survivors                4 survivors
//return true


attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4 ]  
//2 survivors  (16 damage)   2 survivors (6 damage)
//return false

attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4, 0, 8 ]  
//1 survivors                3 survivors 
//return true
*/

const sumPower = arr => arr.reduce((sum, n) => sum + n, 0);
const hasSurvived = (attackers, defenders) => {
    const [iap1, iap2] = [sumPower(attackers), sumPower(defenders)];
    const score = [...Array(Math.max(attackers.length, defenders.length))].reduce((sum, _, i) => sum + (
                    (attackers[i] || 0) > (defenders[i] || 0) ? -1 
                  : (attackers[i] || 0) < (defenders[i] || 0) ? 1
                  : 0), 0);
    return score === 0 ? iap1 <= iap2 : score > 0;
}

console.log(hasSurvived([2, 9, 9, 7], [1, 1, 3, 8])) // false
console.log(hasSurvived([1, 3, 5, 7], [2, 4, 6, 8])) // true
console.log(hasSurvived([10, 10, 1, 1], [4, 4, 7, 7])) // true
console.log(hasSurvived([], [1, 2, 3])) // true
console.log(hasSurvived([1, 2, 3], [])) // false
console.log(hasSurvived([32, 65, 21, 83, 85, 7, 71, 45, 20, 63], [83, 44, 38, 55, 84, 80, 58, 20, 4, 74])) // false
console.log(hasSurvived([41, 44, 68, 85, 62, 21, 17, 7, 24, 48], [61, 7, 63, 9, 48, 70, 79, 53, 24, 3])) // false