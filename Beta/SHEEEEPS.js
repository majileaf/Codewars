/* SHEEEEPS
HI! You have the array of sheeps:

['sheep', 'sheep', 'sheep', 'sheep'...]

But somebody is "sick":

['shpee', 'sheep', 'hspee', 'sheep', 'pehes'...]

You can help them:

shpee => sheep

pehes => sheep

Because shpee and pehes have 1 s, 1 h, 2 e, 1 p.

shep !=> sheep

And:

sheeep !=> sheep

return array(list) with "sheep". if you can't help - delete.
Hard register!!!

A!==a
Example:

ShEep !=> sheep

EXAMPLE:
['sheep', 'Shpee', 'pEhEs', 'PPh', 'heep', 'phees']

return:
['sheep', 'sheep']

Good luck!!!
*/

const reloadSheeps = arr => Array(arr.reduce((sum, n) => sum + Boolean([...n].sort().join('') === 'eehps'), 0)).fill('sheep');

console.log(reloadSheeps(['sheep', 'sheep', 'sheep'])) // ['sheep', 'sheep', 'sheep']
console.log(reloadSheeps(['shpee', 'pehes', 'pseeh', 'epshe'])) // ['sheep', 'sheep', 'sheep', 'sheep']
console.log(reloadSheeps(['p', 'ph', 'shep', 'phe'])) // []
console.log(reloadSheeps(['pe', 'hehe', 'heeps', 'eee', 'ti', 'peehs'])) // ['sheep', 'sheep']
console.log(reloadSheeps(['Sheep', 'EPhes', 'PEHES', 'ShEep', 'sHeep', 'PSeEH'])) // []
console.log(reloadSheeps(['Sheep', 'sHeep', 'shEep', 'phsee'])) // ['sheep']