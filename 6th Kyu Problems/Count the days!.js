/* Count the days!
Little Annie is very excited for upcoming events. She wants to know how many days she has to wait for a specific event.

Your job is to help her out.

Task: Write a function which returns the number of days from today till the given date. 
The function will take a Date object as parameter. You have to round the amount of days.

If the event is in the past, return "The day is in the past!"
If the event is today, return "Today is the day!"
Else, return "x days"
*/

const countDays = d => {
  const today = new Date().getTime();
  d = d.getTime(); 

  return new Date(d).toDateString() === new Date(today).toDateString() ? 'Today is the day!' :
         d < today ? 'The day is in the past!' :
         `${Math.round((d - today) / 86400000)} days`;
}

// alternatively:
// const countDays = d => {
//   const days = Math.round((d - new Date()) / 86400000);
//   return days < 0 ? 'The day is in the past!' : 
//          days < 1 ? 'Today is the day!' : 
//          `${days} days`;
// }

console.log(countDays(new Date("February 28, 2016"))) // "The day is in the past!"
console.log(countDays(new Date())) // "Today is the day!"