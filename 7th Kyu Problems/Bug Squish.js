/* Bug Squish!
Take debugging to a whole new level:

Given a string, remove every single bug.

This means you must remove all instances of the word 'bug' from within a given string, unless the word is plural ('bugs').

For example, given 'obugobugobuoobugsoo', you should return 'ooobuoobugsoo'.

Another example: given 'obbugugo', you should return 'obugo'.

Note that all characters will be lowercase.

Happy squishing!
*/

const debug = s => s.replace(/bug(?!s)/g, '');

console.log(debug('obugobugobuoobugsoo')) // 'ooobuoobugsoo'
console.log(debug('obbugugo')) // 'obugo'
console.log(debug('bugs bunny')) // 'bugs bunny'
console.log(debug('bugs buggy')) // 'bugs gy'