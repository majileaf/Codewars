/* A Letter's Best Friend
Task
Given a string, return if all occurrences of a given letter are always immediately followed by the other given letter.

Worked Example
("he headed to the store", "h", "e") ➞ True

# All occurences of "h": ["he", "headed", "the"]
# All occurences of "h" have an "e" after it.
# Return True

('abcdee', 'e', 'e') ➞ False

# For first "e" we can get "ee"
# For second "e" we cannot have "ee"
# Return False

Examples
("i found an ounce with my hound", "o", "u") ➞ True
("we found your dynamite", "d", "y") ➞ False

Notes
All sentences will be given in lowercase.
*/

const bestFriend = (txt, a, b) => a !== b && txt.split(a + b).every(e => !e.includes(a)) || (a === b && !txt.includes(a));

// First Letter Missing
console.log(bestFriend('',     'z', 'h')) // true
console.log(bestFriend('h',    'z', 'h')) // true
console.log(bestFriend('abhc', 'z', 'h')) // true

// Both Letters Present
console.log(bestFriend('zh',                                'z', 'h')) // true
console.log(bestFriend('zoo wee mama',                      'm', 'a')) // true
console.log(bestFriend('i found an ounce with my hound',    'o', 'u')) // true
console.log(bestFriend('he headed to the store',            'h', 'e')) // true
console.log(bestFriend('those were their thorns they said', 't', 'h')) // true

// Second Letter Missing
console.log(bestFriend('z',   'z', 'h')) // false
console.log(bestFriend('aza', 'z', 'h')) // false

// Both Letters Present
console.log(bestFriend('zh',                         'h', 'z')) // false
console.log(bestFriend('ll',                         'l', 'l')) // false
console.log(bestFriend('zoo wee mama',               'a', 'm')) // false
console.log(bestFriend('we found your dynamite',     'd', 'y')) // false
console.log(bestFriend('look they took the cookies', 'o', 'o')) // false
console.log(bestFriend('a test',                     't', 'e')) // false
console.log(bestFriend('abcde',                      'e', 'e')) // false