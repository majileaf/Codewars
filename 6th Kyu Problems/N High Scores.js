/* N High Scores
Description
You've been given the task of retrieving the top N high scores from players of a video game.

You need to write the function top_scores(records, n_top)

where records is a list of lists in the form of
records = [
  ["Bob", 100],
  ["Jane", 120],
  ["Alice", 10],
  ["Bob", 110],
  ["Bob", 10]
]

and n_top is an integer.

The function should return the top n records, where each user name can appear at most a single time. 
Records should be in from highest to lowest. Users with the same score should be in alphabetical order.

>>> top_scores(records, 3)
[["Jane", 120],["Bob", 110],["Alice", 10]]

if n_top is negative or 0, the returned value should be an empty list.

if n_top is greater than the total number of records, you should include as many valid records as possible.
*/

const topScores = (records, nTop) => {
    if (nTop <= 0) return [];
    const sorted = records.reduce((sum, [name, score]) => (sum[name] = sum[name] > score ? sum[name] : score, sum), {});
    return Object.entries(sorted).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).slice(0, nTop);
}

console.log(topScores([
    ["John", 100],
    ["John", 120],
    ["John", 300]
], 2)) // [["John", 300]]

console.log(topScores([
    ["Peter", 100],
    ["Parker", 120],
    ["Mary", 50],
    ["Jane", 600]
], 3))
/*  ["Jane", 600],
    ["Parker", 120],
    ["Peter", 100]
*/
console.log(topScores([
    ["Sauron", 1000],
    ["Frodo", 500],
    ["Frank", 500],
    ["Bilbo", 100]
], 3))
/*  [
    ["Sauron", 1000],
    ["Frank", 500],
    ["Frodo", 500]
    ]
*/
console.log(topScores([
    ["No", 100],
    ["Results", 250],
    ["From", 600],
    ["Negative", 100],
    ["Numbers", 10]
], -1)) // []