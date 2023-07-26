/* What rank is this card?
What is the rank of a playing card? The function takes a string like '2c' or 'Kh' and 
returns a value based on rank of the card. The first character corresponds to the rank 
of the card and the second character corresponds to the suit of the card. 

Cards 2-9 should return the corresponding number. T returns 10, J => 11, Q => 12, 
K => 13 and A => 14. Otherwise the rank should be returned as 0.

For example:
rank('2c') == 2;
rank('Tc') == 10;
rank('As') == 14;
rank('1c') == 0; // There is no card '1'
Suits can be disregarded.
*/

const rank = card => {
  const [number, suit] = [...card];
  const cards = {
      'A': 14, 'K': 13, 'Q': 12, 'J': 11, 'T': 10, 
      9: 9, 8: 8, 7: 7, 6: 6, 5: 5, 4: 4, 3: 3, 2: 2
  };

  return cards[number] || 0;
}

// alternatively:
// const rank = card => ' 23456789TJQKA'.indexOf(card[0]) + 1;

console.log(rank("2s")) // 2
console.log(rank("7h")) // 7
console.log(rank("Jc")) // 11
console.log(rank("Ad")) // 14
console.log(rank("1d")) // 0