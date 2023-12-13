/* Selective fear of numbers
I've got a crazy mental illness. I dislike numbers a lot. But it's a little complicated: 
The number I'm afraid of depends on which day of the week it is... 

This is a concrete description of my mental illness:
Monday --> 12
Tuesday --> numbers greater than 95
Wednesday --> 34
Thursday --> 0
Friday --> numbers divisible by 2
Saturday --> 56
Sunday --> 666 or -666

Write a function which takes a string (day of the week) and an integer (number to be tested) 
so it tells the doctor if I'm afraid or not. (return a boolean)
*/

const AmIAfraid = (day, num) => {
    switch (day) {
        case 'Monday': return num === 12;
        case 'Tuesday': return num > 95;
        case 'Wednesday': return num === 34;
        case 'Thursday': return num === 0;
        case 'Friday': return num % 2 === 0;
        case 'Saturday': return num === 56;
        case 'Sunday': return Math.abs(num) === 666;
    }
}

// alternatively: 
// const fear = {
//   Monday: n => n === 12,
//   Tuesday: n => n > 95,
//   Wednesday: n => n === 34,
//   Thursday: n => n === 0,
//   Friday: n => n % 2 === 0,
//   Saturday: n => n === 56,
//   Sunday: n => Math.abs(num) === 666
// };
// const AmIAfraid = (day, num) => fear[day](num);

console.log(AmIAfraid("Monday", 13)) // false
console.log(AmIAfraid("Sunday", -666)) // true
console.log(AmIAfraid("Tuesday", 2)) // false
console.log(AmIAfraid("Tuesday", 965)) // true
console.log(AmIAfraid("Friday", 2)) // true