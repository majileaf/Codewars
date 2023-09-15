/* Coding Meetup #8 - Higher-Order Functions Series - Will all continents be represented?
You will be given a sequence of objects (associative arrays in PHP) representing data about developers 
who have signed up to attend the next coding meetup that you are organising.

Your task is to return:
true if all of the following continents / geographic zones will be represented by at least 
one developer: 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'.
false otherwise.

For example, given the following input array:
var list1 = [
  { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
  { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
  { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
];
your function should return true as there is at least one developer from the required 5 geographic zones.

Notes:
The input array and continent names will always be valid and formatted as in the list above for example 'Africa' will 
always start with upper-case 'A'.
*/

// initial solution:
// const allContinents = list => {
//     let continents = new Set(['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']);
//     for (let item of list) continents.delete(item.continent);
//     return !continents.size;
// }

const allContinents = list => {
    const count = list.reduce((sum, n) => (sum[n.continent] = (sum[n.continent] || 0) + 1, sum), {});
    return ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'].every(continent => count[continent] > 0);
}

// alternatively #1:
// const allContinents = list => ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'].every(continent => list.some(dev => dev.continent === continent));

// alternatively #2:
// const allContinents = list => new Set(list.map(dev => dev.continent)).size === 5;

var list1 = [
  { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
  { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
  { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' }
];

var list2 = [
  { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' }
];

console.log(allContinents(list1)) // true
console.log(allContinents(list2)) // false