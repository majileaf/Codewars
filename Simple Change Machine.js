/* Simple Change Machine
Your task is to create a change machine.

The machine accepts a range of specified coins and notes, it returns change in 20p and 10p coins 
in the minimum amount of pieces. A 50p for example would return two 20p pieces and one 10p piece. 
The machine will always try and return change, if you input a 20p for example it will return 
"10p 10p".

The machine accepts these coins and notes: £5, £2, £1, 50p, 20p. Any coins and notes which are 
not accepted by the machine will be returned. If you were to put a £20 note into the machine for 
example, it would be returned to you and not broken into change.

This change machine is programmed to accept and distribute strings rather than numbers. The 
change will be returned as one string with the change separated by single spaces & no commas. 
The values of the string will be descending.
*/

// hardcoded
// const changeMe = moneyIn => {
//     switch (moneyIn) {
//         case '£5': return '20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p';
//         case '£2': return '20p 20p 20p 20p 20p 20p 20p 20p 20p 20p';
//         case '£1': return '20p 20p 20p 20p 20p';
//         case '50p': return '20p 20p 10p';
//         case '20p': return '10p 10p';
//         default: return moneyIn;
//     }
// }

const changeMe = moneyIn => {
  switch (moneyIn) {
      case '£5': moneyIn = 500; break;
      case '£2': moneyIn = 200; break;
      case '£1': moneyIn = 100; break;
      case '50p': moneyIn = 50; break;
      case '20p': moneyIn = 20; break;
      default: return moneyIn; 
  }

  return (moneyIn !== 20) 
      ? [...Array(Math.floor(moneyIn / 20))].fill('20p').concat([...Array(moneyIn % 20 / 10)].fill('10p')).join(' ')
      : [...Array(moneyIn / 10)].fill('10p').join(' ');
}

console.log(changeMe("£1")) // "20p 20p 20p 20p 20p"
console.log(changeMe("Money")) // "Money"