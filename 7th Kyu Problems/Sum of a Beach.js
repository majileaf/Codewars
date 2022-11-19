/* Sum of a Beach
Beaches are filled with sand, water, fish, and sun. Given a string, calculate how many times the words 
"Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).

Examples
sumOfABeach("WAtErSlIde")                    ==>  1
sumOfABeach("GolDeNSanDyWateRyBeaChSuNN")    ==>  3
sumOfABeach("gOfIshsunesunFiSh")             ==>  4 
sumOfABeach("cItYTowNcARShoW")               ==>  0
*/

const sumOfABeach = beach => {
  beach = beach.toLowerCase();
  return (beach.split('sand').length - 1) + 
         (beach.split('water').length - 1) + 
         (beach.split('fish').length - 1) + 
         (beach.split('sun').length - 1);
}

console.log(sumOfABeach("SanD")) // 1
console.log(sumOfABeach("sunshine")) // 1
console.log(sumOfABeach("sunsunsunsun")) // 4
console.log(sumOfABeach("123FISH321")) // 1

console.log(sumOfABeach("weoqipurpoqwuirpousandiupqwoieurioweuwateruierqpoiweurpouifiShqowieuqpwoeuisUn")) // 4
console.log(sumOfABeach("sAnDsandwaTerwatErfishFishsunsunsandwater")) // 10
console.log(sumOfABeach("joifjepiojfoiejfoajoijawoeifjowejfjoiwaefjiaowefjaofjwoj fawojef ")) // 0
console.log(sumOfABeach("jwefjwjfsandsandwaterwaterfishfishsunsunsandwateriojwhefa;jawof;jawio;f")) // 10
console.log(sumOfABeach("saNdsandwaterwAterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwater"))  // 100

console.log(sumOfABeach("sununsu")) // 1
console.log(sumOfABeach("sandandndsansa")) // 1
console.log(sumOfABeach("wateratertererwatewatwa")) // 1
console.log(sumOfABeach("fishishshfisfi")) // 1