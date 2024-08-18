/* Where Are My Glasses?
Oh no! I've lost my glasses, but paradoxically, I need glasses to find my glasses!

Please help me out by showing me the index in the list which contains my glasses. 
They look like two capital Os, with at least one dash in between!

This means that both O--O and O------------O are valid glasses, but not O----#--O for example!
Search thoroughly, you might find my glasses in places such as 'dustO-Odust'
Examples
["phone", "O-O", "coins", "keys"] ➞ 1

["OO", "wallet", "O##O", "O----O"] ➞ 3

["O--#--O", "dustO---Odust", "more dust"] ➞ 1
Notes
All lists will include one valid pair of glasses because I swear I dropped them around here somewhere ...
All elements in the list are strings.
*/

const findGlasses = arr => arr.findIndex(e => /O-{1,}O/.test(e));

console.log(findGlasses(['phone', 'O-O', 'coins', 'keys'])) // 1
console.log(findGlasses(['OO', 'wallet', 'O##O', 'O----O'])) // 3
console.log(findGlasses(['O_O', 'O-O', 'OwO'])) // 1
console.log(findGlasses(['O--#--O', 'dustO---Odust', 'more dust'])) // 1
console.log(findGlasses(['floor', 'the floor again', 'pockets', 'bed', 'cabinet', 'the top of my head O-O'])) // 5
console.log(findGlasses(['OOOO----~OOO', '-------', 'OOOOOOO', 'OO-OO-OO-O'])) // 3