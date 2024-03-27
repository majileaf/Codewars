/* Can I play right now?
As a strict big brother, I do limit my young brother Vasya on time he spends on computer games. 
I define a prime-time as a time period till which Vasya have a permission to play computer games. 
I specify start hour and end hour as pair of integers.

I need a function which will take three numbers - a present moment (current hour), a start hour 
of allowed time period and an end hour of allowed time period. The function should give answer to 
a question (as a boolean): "Can Vasya play in specified time?"

If I say that prime-time is from 12 till 15 that means that at 12:00 it's OK to play computer but 
at 15:00 there should be no more games.

I will allow Vasya to play at least one hour a day.
*/

const canIPlay = (now, start, end) => {
  if (end < start) {
      end += 24;
      now = now < start ? now + 24 : now;
  }
  return start <= now && now < end;
}

console.log(canIPlay(12, 10, 14)) // true,  "12:00 should match to 10:00-14:00 prime-time"
console.log(canIPlay(12, 13, 14)) // false, "12:00 shouldn't match to 13:00-14:00 prime-time"
console.log(canIPlay(15, 12, 15)) // false, "15:00 shouldn't match to 12:00-15:00 prime-time"
console.log(canIPlay(23, 22,  1)) // true,  "23:00 should match to 22:00-01:00 prime-time"