/* Chuck Norris II - One Punch
Chuck Norris is the world's toughest man - he once kicked a horse in the chin. 
Its descendants today are known as giraffes.

Like his punches, Chuck NEVER needs more than one line of code.

Your task, to please Chuck, is to create a function that chains 4 methods on a SINGLE LINE! 
You can pass with multiple lines, but CHuck will pity you. Go big or go home. ONE LINE!!

Chuck expects his list of favourite items to be split, sorted, joined AND have any occurrences 
of the letters 'e' and 'a' removed - why, you ask? Well Nunchuks hasn't got the letters 
'a' or 'e' in it has it?? Chuck says shut your mouth... and don't forget the capitals.

If anyone dares to provide Chuck with an empty string, an integer or an array, just return a 
description of their face once Chuck finds out: 'Broken!'

Go, go go!!!
*/

const onePunch = items => typeof items === 'string' && items !== '' ? items.split(' ').sort().join(' ').replace(/[ae]/gi, '') : 'Broken!';

console.log(onePunch('Beard Knife Grenade Motorbike Hat')) // 'Brd Grnd Ht Knif Motorbik'
console.log(onePunch('Horse Rope Cups Car Beard')) // 'Brd Cr Cups Hors Rop'
console.log(onePunch('Friend Beer Beard Monkey Laptop')) // 'Brd Br Frind Lptop Monky'

console.log(onePunch('')) // 'Broken!'
console.log(onePunch(3456)) // 'Broken!'
console.log(onePunch(['c', 'b', 'a'])) // 'Broken!'

console.log(onePunch('eHiQvrUgeVsFgiCyFAkMmFknDXctcUVWirufADxOBAZYfJiLfxzI')) 
// 'HiQvrUgVsFgiCyFkMmFknDXctcUVWirufDxOBZYfJiLfxzI'