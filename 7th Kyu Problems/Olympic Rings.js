/* Olympic Rings
To celebrate the start of the Rio Olympics (and the return of 'the Last Leg' on C4 tonight) this is 
an Olympic inspired kata.

Given a string of random letters, you need to examine each. Some letters naturally have 'rings' in them. 
'O' is an obvious example, but 'b', 'p', 'e', 'A', etc are all just as applicable. 
'B' even has two!! Please note for this kata you can count lower case 'g' as only one ring.

Your job is to count the 'rings' in each letter and divide the total number by 2. Round the answer down. 
Once you have your final score:

if score is 1 or less, return 'Not even a medal!'; if score is 2, return 'Bronze!'; if score is 3, return 
'Silver!'; if score is more than 3, return 'Gold!';

Dots over i's and any other letters don't count as rings.
*/

const olympicRing = a => {
    const rings = {
        'a': 1, 'b': 1, 'd': 1, 
        'e': 1, 'g': 1, 'o': 1, 
        'p': 1, 'q': 1, 'A': 1, 
        'B': 2, 'D': 1, 'O': 1, 
        'P': 1, 'Q': 1, 'R': 1, 
    }

    const score = Math.floor([...a].reduce((sum, n) => sum + (rings[n] || 0), 0) / 2);
    
    return score < 2 ? 'Not even a medal!' 
         : score === 2 ? 'Bronze!' 
         : score === 3 ? 'Silver!' 
         : 'Gold!';
}

console.log(olympicRing('wHjMudLwtoPGocnJ')) // 'Bronze!'
console.log(olympicRing('eCEHWEPwwnvzMicyaRjk')) // 'Bronze!')
console.log(olympicRing('JKniLfLW')) // 'Not even a medal!'