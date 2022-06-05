/*
Your task, is to create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:

1 2 3
2 4 6
3 6 9
for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]
*/

const multiplicationTable =  size => [...Array(size)].map((_, m) => [...Array(size)].map((_, n) => (n + 1) * (m + 1)));

console.log(multiplicationTable(3)) //  [[1,2,3], [2,4,6], [3,6,9]]