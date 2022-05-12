/*
Story
Your online store likes to give out coupons for special occasions. 
Some customers try to cheat the system by entering invalid codes 
or using expired coupons.

Task
Your mission:
Write a function called checkCoupon which verifies that a coupon code 
is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. 
All dates will be passed as strings in this format: "MONTH DATE, YEAR".

Examples:
checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
*/

// initial solution:
// const convertMonth = str => {
//     const strLC = str.toLowerCase();
//     return {
//         'january': 1,
//         'february': 2,
//         'march': 3,
//         'april': 4,
//         'may': 5,
//         'june': 6,
//         'july': 7,
//         'august': 8,
//         'september': 9,
//         'october': 10,
//         'november': 11,
//         'december': 12,
//     }[strLC];
// }

// const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) => {
//     console.log(enteredCode, correctCode, currentDate, expirationDate)
//     if (enteredCode !== correctCode) return false;

//     let [cMonth, cDay, cYear] = currentDate.split(' ');
//     cYear = Number(cYear);
//     cMonth = convertMonth(cMonth);
//     cDay = Number(cDay.split(',')[0]);
//     const curDate = new Date (cYear, cMonth, cDay);

//     let [exMonth, exDay, exYear] = expirationDate.split(' ');
//     exYear = Number(exYear);
//     exMonth = convertMonth(exMonth);
//     exDay = Number(exDay.split(',')[0]);
//     const exDate = new Date (exYear, exMonth, exDay);
    
//     return curDate <= exDate;
// }

const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) => {
    return enteredCode === correctCode && new Date(currentDate) <= new Date(expirationDate);
}

console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014')) // true
console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014')) // false