/* Spraying trees
There are five workers : James,John,Robert,Michael and William.They work one by one and on weekends they rest. 
Order is same as in the description(James works on mondays,John works on tuesdays and so on).
You have to create a function 'task' that will take 3 arguments(w, n, c):

Weekday
Number of trees that must be sprayed on that day
Cost of 1 litre liquid that is needed to spray tree,let's say one tree needs 1 litre liquid.
Let cost of all liquid be x

Your function should return string like this : 
'It is (weekday) today, (name), you have to work, you must spray (number) trees and you need (x) dollars to buy liquid'

For example:
task('Monday', 15, 2) -> 'It is Monday today, James, you have to work, you must spray 15 trees and you need 30 dollars to buy liquid'
*/

const workers = {Monday: 'James', Tuesday: 'John', Wednesday: 'Robert', Thursday: 'Michael', Friday: 'William'}
const task = (w, n, c) => `It is ${w} today, ${workers[w]}, you have to work, you must spray ${n} trees and you need ${n * c} dollars to buy liquid`;

console.log(task('Wednesday',10,2)) // 'It is Wednesday today, Robert, you have to work, you must spray 10 trees and you need 20 dollars to buy liquid'
console.log(task('Monday',4,3)) // 'It is Monday today, James, you have to work, you must spray 4 trees and you need 12 dollars to buy liquid'
console.log(task('Friday',5,4)) // 'It is Friday today, William, you have to work, you must spray 5 trees and you need 20 dollars to buy liquid'
console.log(task('Tuesday',6,1)) // 'It is Tuesday today, John, you have to work, you must spray 6 trees and you need 6 dollars to buy liquid'
console.log(task('Thursday',5,3)) // 'It is Thursday today, Michael, you have to work, you must spray 5 trees and you need 15 dollars to buy liquid'