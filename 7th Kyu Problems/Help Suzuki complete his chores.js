/* Help Suzuki complete his chores!
Suzuki has a long list of chores required to keep the monastery in good order. 
Each chore can be completed independently of the others and assigned to any student. 

Knowing there will always be an even number of chores and that the number of students isn't limited, 
Suzuki needs to assign two chores to each student in a way which minimizes the total duration of the day's work.

For example, with the list of chores [1, 5, 2, 8, 4, 9, 6, 4, 2, 2, 2, 9], 
he'll need 6 students whose total workload will be: [7, 8, 8, 10, 10, 11] 
(as for [5+2, 4+4, 6+2, 8+2, 1+9, 9+2]). 

In this case, the maximal workload is minimized to 11 
(=9+2. Keep in mind two chores must be assigned to each student involved).

Input/output
    Input: 10 ≤ chores length ≤ 30, chores length is always even.
    Output: array of workloads, in ascending order.
*/

const choreAssignment = chores => chores
    .slice()
    .sort((a, b) => a - b)
    .reduce((sum, _, i, arr) => (i < arr.length / 2 
        ? sum.push(arr[i] + arr[arr.length - 1 - i]) 
        : sum
    , sum), [])
    .sort((a, b) => a - b);

console.log(choreAssignment([5, 2, 1, 6, 4, 4])) // [7, 7, 8]]
console.log(choreAssignment([1, 5, 2, 8, 4, 9, 6, 4, 2, 2, 2, 9])) // [7, 8, 8, 10, 10, 11]]
console.log(choreAssignment([5, 8, 3, 5, 3, 10, 5, 3, 10, 2, 4, 8, 7, 3, 9, 6])) // [10, 11, 11, 11, 11, 12, 12, 13]]
console.log(choreAssignment([9, 2, 10, 10, 5, 5, 8, 7, 4, 2, 8, 3, 6, 8, 7, 3, 6, 2])) // [11, 11, 11, 12, 12, 12, 12, 12, 12]]
console.log(choreAssignment([1, 6, 5, 5, 1, 10, 10, 9, 2, 10, 3, 9, 5, 4, 5, 6, 1, 9, 1, 8])) // [10, 10, 11, 11, 11, 11, 11, 11, 12, 12]]