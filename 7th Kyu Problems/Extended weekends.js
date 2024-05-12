/* Extended weekends
If the first day of the month is a Friday, it is likely that the month will have an Extended Weekend. 
That is, it could have five Fridays, five Saturdays and five Sundays.

In this Kata, you will be given a start year and an end year. Your task will be to find months that 
have extended weekends and return:

- The first and last month in the range that has an extended weekend
- The number of months that have extended weekends in the range, inclusive of start year and end year.

For example:
solve(2016,2020) = ["Jan","May",5]. //The months are: Jan 2016, Jul 2016, Dec 2017, Mar 2019 and May 2020
*/

const solve = (a, b) => {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    let countFri = 0;
    const arr = [];

    for (let year = a; year <= b; year++) {
        for (let month = 0; month < 12; month++) {
            let days = new Date(year, month + 1, 0).getDate();
            if (days === 31) {
                for (let day = 1; day <= days; day++) {
                    if (new Date(year, month, day).getDay() === 5 && new Date(year, month, day + 2).getDay() === 0 && new Date(year, month, day + 2).getMonth() === month) countFri++;
                }
                if (countFri === 5) arr.push(months[month]);
                countFri = 0;
            }
        }
    }
    return [arr[0], arr[arr.length - 1], arr.length];
}

// alternatively:
// const solve = (a, b) => {
//     const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
//     const arr = [];

//     for (let year = a; year <= b; year++) {
//         for (let month of [0, 2, 4, 6, 7, 9, 11]) {
//             if (new Date(year, month, 1).getDay() === 5) arr.push(months[month]);
//         }
//     }
//     return [arr[0], arr[arr.length - 1], arr.length];
// }

console.log(solve(2016,2020)) // ["Jan","May",5]
console.log(solve(1900,1950)) // ["Mar","Dec",51]
console.log(solve(1800,2500)) // ["Aug","Oct",702]