/*
Finish the uefaEuro2016() function so it return string just like in the examples below:

uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."
*/

// initital solution:
// const uefaEuro2016 = (teams, scores) => {
//     const message = `At match ${teams[0]} - ${teams[1]}`;

//     switch(true) {
//         case (scores[0] > scores[1]): return message + `, ${teams[0]} won!`;
//         case (scores[0] < scores[1]): return message + `, ${teams[1]} won!`;
//         case (scores[0] === scores[1]): return message + ', teams played draw.';
//     }
// }

const uefaEuro2016 = (teams, scores) => {
    const [team1, team2] = teams;
    const [score1, score2] = scores;
    const message = `At match ${team1} - ${team2}`;

    switch(true) {
        case (score1 > score2): return message + `, ${team1} won!`;
        case (score1 < score2): return message + `, ${team2} won!`;
        case (score1 === score2): return message + ', teams played draw.';
    }
}

console.log(uefaEuro2016(['Germany', 'Ukraine'], [2, 0])) // "At match Germany - Ukraine, Germany won!"
console.log(uefaEuro2016(['Belgium', 'Italy'], [0, 2])) // "At match Belgium - Italy, Italy won!"
console.log(uefaEuro2016(['Portugal', 'Iceland'], [1, 1])) // "At match Portugal - Iceland, teams played draw."