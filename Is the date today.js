/* Is the date today
Write a simple function that takes a Date as a parameter and returns 
a Boolean representing whether the date is today or not.

Make sure that your function does not return a false positive by 
only checking the day.
*/

const isToday = date => new Date(date).toString().slice(0, 16) === new Date().toString().slice(0, 16);

console.log(isToday('2168-03-07T18:32:12.553Z')) 
console.log(isToday('2123-01-29T05:44:28.600Z')) 
console.log(isToday('2154-05-27T08:43:34.527Z')) 
console.log(isToday('2116-05-13T06:26:29.686Z')) 
console.log(isToday('2069-08-09T23:48:47.267Z')) 
console.log(isToday('2001-01-16T22:35:56.317Z')) 
console.log(isToday('1928-08-08T05:35:32.981Z')) 
console.log(isToday('2125-01-14T22:32:43.367Z')) 
console.log(isToday('2042-04-13T01:57:59.166Z')) 
console.log(isToday('1964-12-30T00:38:32.540Z')) 
console.log(isToday('1986-07-13T12:15:57.818Z')) 
console.log(isToday('1944-08-08T06:39:36.155Z')) 
console.log(isToday('1952-08-18T15:20:03.075Z')) 