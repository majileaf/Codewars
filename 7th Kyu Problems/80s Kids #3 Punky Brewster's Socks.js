/* 80's Kids #3: Punky Brewster's Socks
Punky loves wearing different colored socks, but Henry can't stand it.

Given an array of different colored socks, return a pair depending on who was picking them out.

Example:

getSocks('Punky', ['red','blue','blue','green']) -> ['red', 'blue']

Note that Punky can have any two colored socks, in any order, as long as they are different and both exist. 
Henry always picks a matching pair.

If there is no possible combination of socks, return an empty array.
*/

const getSocks = (name, socks) => {
    const unique = [...new Set(socks)];
    return name === 'Punky' && unique.length > 1 ? unique.slice(0, 2) 
          :name === 'Henry' && unique.length < socks.length ? socks.filter(e => socks.indexOf(e) !== socks.lastIndexOf(e))
          :[];
}

console.log(getSocks('Punky', ['red','blue','blue','green'])) // ['red', 'blue']
console.log(getSocks('Henry', ['red','blue','blue','green'])) // ['blue', 'blue']