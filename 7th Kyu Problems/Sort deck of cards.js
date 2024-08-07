/* Sort deck of cards
Write a function sort_cards() that sorts a shuffled list of cards, so that any given list of cards is sorted by rank, 
no matter the starting collection.

All cards in the list are represented as strings, so that sorted list of cards looks like this:

['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K']

Example:
>>> sort_cards(['3', '9', 'A', '5', 'T', '8', '2', '4', 'Q', '7', 'J', '6', 'K'])
['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K']

Hint: Tests will have many occurrences of same rank cards, as well as vary in length. 
You can assume though, that input list is always going to have at least 1 element.
*/

const rankCards = {A: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, T: 10, J: 11, Q: 12, K: 13};
const sortCards = array => array.sort((a, b) => rankCards[a] - rankCards[b]);

// alternatively:
// const rankCards = {A: 1, T: 10, J: 11, Q: 12, K: 13};
// const sortCards = array => array.sort((a, b) => (rankCards[a] || a) - (rankCards[b] || b));

console.log(sortCards([3,9,"A",5,"T",8,2,4,"Q",7,"J",6,"K"])) // ["A",2,3,4,5,6,7,8,9,"T","J","Q","K"]
console.log(sortCards(["J","J",2,"T",9,6])) // [2,6,9,"T","J","J"]
console.log(sortCards(["A",2,3,4,5,6,6,7,8,9,"T","J","Q","A"])) // ['A', 'A', 2, 3, 4, 5, 6, 6, 7, 8, 9, 'T', 'J', 'Q']