/*
You get any card as an argument. Your task is to return the 
suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'
*/

// initial solution:
// const defineSuit = card => {
//     switch(card.slice(-1)) {
//         case '♣': return 'clubs';
//         case '♦': return 'diamonds';
//         case '♥': return 'hearts';
//         case '♠': return 'spades';
//     }
// }

const defineSuit = card => ({'♣': 'clubs', '♦': 'diamonds', '♥': 'hearts', '♠': 'spades'})[card.slice(-1)];

console.log(defineSuit('3♣')) // 'clubs'
console.log(defineSuit('3♦')) // 'diamonds'
console.log(defineSuit('3♥')) // 'hearts'
console.log(defineSuit('3♠')) // 'spades'