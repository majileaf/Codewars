/*
Given a string, turn each character into its ASCII character code and 
join them together to create a number - let's call this number total1:
'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667

Then replace any incidence of the number 7 with the number 1, and call 
this number 'total2':
total1 = 656667
              ^
total2 = 656661
              ^

Then return the difference between the sum of the digits in total1 and total2:
  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
                       6
*/

const sumDigits = n => n.split('').reduce((sum, n) => sum + Number(n), 0);

const calc = x => {
    const total1 = [...x].map(e => e.charCodeAt()).join('');
    const total2 = total1.split('').map(e => e == 7 ? 1 : e).join('');
    return sumDigits(total1) - sumDigits(total2);
}

console.log(calc('abcdef')) // 6
console.log(calc('ifkhchlhfd')) // 6
console.log(calc('aaaaaddddr')) // 30
console.log(calc('jfmgklf8hglbe')) // 6
console.log(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')) // 96