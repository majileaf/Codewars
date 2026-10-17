/* All Star Code Challenge #1
This Kata is intended as a small challenge for my students

All Star Code Challenge #1

Write a function, called sumPPG, that takes two NBA player objects/struct/Hash/Dict/Class and sums their PPG

Examples:
function NBAplayer(name, team, ppg){
  this.name=name;
  this.team=team;
  this.ppg=ppg;
}

var iverson = new NBAplayer("Iverson", "76ers", 11.2);
var jordan = new NBAplaer("Jordan", "bulls", 20.2);
sumPPG(iverson, jordan); // => 31.4
*/

function NBAplayer(name, team, ppg){
  this.name=name;
  this.team=team;
  this.ppg=ppg;
}

const iverson = new NBAplayer("Iverson", "76ers", 11.2);
const jordan = new NBAplayer("Jordan", "bulls", 20.2);

const sumPPG = (playerOne, playerTwo) => playerOne.ppg + playerTwo.ppg;

console.log(sumPPG(iverson, jordan)) // 31.4