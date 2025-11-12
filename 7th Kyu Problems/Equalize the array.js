/* Equalize the array!
No description!!!
Input :: [10,20,25,0]
Output :: ["+0", "+10", "+15", "-10"] 
*/

const equalize = array => array.map(e => (e - array[0] >= 0 ? '+' : '') + (e - array[0]));

console.log(equalize([10,20,25,0])) // ["+0", "+10", "+15", "-10"] 
console.log(equalize([20,30,35,10])) // ["+0","+10","+15","-10"]
console.log(equalize([])) // []
console.log(equalize([10,12,24,50,0,15,20])) // ["+0","+2","+14","+40","-10","+5","+10"]