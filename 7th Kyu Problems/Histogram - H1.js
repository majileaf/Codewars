/* Histogram - H1
Background
A 6-sided die is rolled a number of times and the results are plotted as a character-based histogram.

Example:
6|##### 5
5|
4|# 1
3|########## 10
2|### 3
1|####### 7

Task
You will be passed the dice value frequencies, and your task is to write the code to return a string 
representing a histogram, so that when it is printed it has the same format as the example.

Notes
There are no trailing spaces on the lines
All lines (including the last) end with a newline \n
A count is displayed beside each bar except where the count is 0
The number of rolls may vary but there are never more than 100
*/

const histogram = results => results
    .map((_, i) => (i + 1) + '|' + '#'.repeat(results[i]) + (results[i] ? ' ' + results[i] : '') + '\n')
    .reverse()
    .join('');

console.log(histogram([7,3,10,1,0,5]))
//'6|##### 5
// 5|
// 4|# 1
// 3|########## 10
// 2|### 3
// 1|####### 7'