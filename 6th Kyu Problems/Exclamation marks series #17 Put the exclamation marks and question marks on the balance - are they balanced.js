/* Exclamation marks series #17: Put the exclamation marks and question marks on the balance - are they balanced?
Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and 
right on the balance - are they balanced?

If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; 
if they are balanced, return "Balance".

Examples
"!!", "??"     -->  "Right"
"!??", "?!!"   -->  "Left"
"!?!!", "?!?"  -->  "Left"
"!!???!????", "??!!?!!!!!!!"  -->  "Balance"
*/

const countMarks = str => [...str].reduce((sum, n) => sum + (n === '!' ? 2 : 3), 0);
const balance = (left, right) => {
    const [Left, Right] = [countMarks(left), countMarks(right)];
    return Left > Right ? 'Left'  :
           Left < Right ? 'Right' :
           'Balance';
}

console.log(balance("!!", "??")) // "Right"
console.log(balance("!??", "?!!")) // "Left"
console.log(balance("!?!!", "?!?")) // "Left"
console.log(balance("!!???!????", "??!!?!!!!!!!")) // "Balance"