/* Round by 0.5 steps
Round any given number to the closest 0.5 step

I.E.

solution(4.2) = 4
solution(4.3) = 4.5
solution(4.6) = 4.5
solution(4.8) = 5

Round up if number is as close to previous and next 0.5 steps.

solution(4.75) == 5
*/

const solution = n => {
  const mid = Math.ceil(n) - 0.5;
  return mid - n <= -0.25 ? Math.ceil(n) :
         mid - n >= 0.25 ? Math.floor(n) :
         mid;
}

// alternatively:
// const solution = n => Math.round(n * 2) / 2;

console.log(solution(4.2)) // 4
console.log(solution(4.4)) // 4.5
console.log(solution(4.6)) // 4.5
console.log(solution(4.8)) // 5
console.log(solution(4.75)) // 5