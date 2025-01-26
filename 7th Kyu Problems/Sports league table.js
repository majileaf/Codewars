/* Sports league table
Your local sports team manager wants to know how the team is doing in the league. 
You have been asked to write the manager a function that will allow them to update the league table.

League details
The possible results in the league are "draw" and "win" with 3 points for a win and 1 point each for a draw.

The league table is stored in order from top to bottom in a 2-D array called 
leagueTable (Javascript) / $league_table (Ruby) / league_table (Python) with each element containing 
the team name, and the number of points that team has. 

For example:
[["teamC", 6], ["teamA", 4], ["teamB", 4], ["teamD", 3]]

Function specification
Write a function which takes three parameters: first team's name, second team's name, and 
the result of the match (in Python version the league_table will be passed as an additional argument). 

The function must add the correct points to teams 1 and 2 based on the result of the match, and 
reorder the array based on new the league positions. 

League positions should be based first on the number of points then if points are equal, alphabetically. 
The function must also return the updated league table.
*/

const leagueTable = [['teamA', 3], ['teamB', 3], ['teamC', 3], ['teamD', 3]];

const leagueCalculate = (team1, team2, result) => {
  const order = leagueTable.map(([team, score]) => team);
  switch (result) {
      case 'win':
          leagueTable[order.indexOf(team1)][1] += 3;
          break;
      case 'draw': 
          leagueTable[order.indexOf(team1)][1]++;
          leagueTable[order.indexOf(team2)][1]++;
  }
  return leagueTable.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
}

// alternatively:
// const leagueCalculate = (team1, team2, result) => {
//   switch (result) {
//       case 'win':
//           leagueTable[leagueTable.findIndex(e => e[0] === team1)][1] += 3;
//           break;
//       case 'draw': 
//           leagueTable[leagueTable.findIndex(e => e[0] === team1)][1]++;
//           leagueTable[leagueTable.findIndex(e => e[0] === team2)][1]++;
//   }
//   return leagueTable.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
// }

console.log(leagueCalculate("teamA","teamB","draw")) // [["teamA",4],["teamB",4],["teamC",3],["teamD",3]]
console.log(leagueCalculate("teamC","teamD","win")) // [["teamC",6],["teamA",4],["teamB",4],["teamD",3]]
console.log(leagueCalculate("teamA","teamC","draw")) // [["teamC",7],["teamA",5],["teamB",4],["teamD",3]]
console.log(leagueCalculate("teamB","teamD","win")) // [["teamB",7],["teamC",7],["teamA",5],["teamD",3]]
console.log(leagueCalculate("teamA","teamB","win")) // [["teamA",8],["teamB",7],["teamC",7],["teamD",3]]
console.log(leagueCalculate("teamC","teamD","draw")) // [["teamA",8],["teamC",8],["teamB",7],["teamD",4]]
console.log(leagueCalculate("teamD","teamA","draw")) // [["teamA",9],["teamC",8],["teamB",7],["teamD",5]]
console.log(leagueCalculate("teamC","teamB","win")) // [["teamC",11],["teamA",9],["teamB",7],["teamD",5]]
console.log(leagueCalculate("teamB","teamD","win")) // [["teamC",11],["teamB",10],["teamA",9],["teamD",5]]
console.log(leagueCalculate("teamA","teamB","draw")) // [["teamB",11],["teamC",11],["teamA",10],["teamD",5]]