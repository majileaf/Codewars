/* Holiday II - Plane Seating
Finding your seat on a plane is never fun, particularly for a long haul flight... 
You arrive, realise again just how little leg room you get, and sort of climb 
into the seat covered in a pile of your own stuff.

To help confuse matters (although they claim in an effort to do the opposite) 
many airlines omit the letters 'I' and 'J' from their seat naming system.

the naming system consists of a number (in this case between 1-60) that denotes 
the section of the plane where the seat is (1-20 = front, 21-40 = middle, 40+ = back). 
This number is followed by a letter, A-K with the exclusions mentioned above.

Letters A-C denote seats on the left cluster, D-F the middle and G-K the right.

Given a seat number, your task is to return the seat location in the following format:
'2B' would return 'Front-Left'.

If the number is over 60, or the letter is not valid, return 'No Seat!!'.
*/

// initial solution:
// const planeSeat = a => {
//     const number = a.slice(0, a.length - 1);
//     const letter = a.slice(-1);

//     const section = number >= 1 && number <= 20 ? 'Front' :
//                     number > 20 && number <= 40 ? 'Middle' :
//                     number > 40 && number <= 60 ? 'Back' 
//                     : false;
                    
//     const cluster = letter >= 'A' && letter <= 'C' ? 'Left' :
//                     letter >= 'D' && letter <= 'F' ? 'Middle' :
//                     letter == 'G' || letter == 'H' || letter == 'K' ? 'Right'
//                     : false;

//     return section && cluster ? `${section}-${cluster}` : 'No Seat!!';
// }

const planeSeat = a => {
    const number = a.slice(0, a.length - 1);
    const letter = a.slice(-1);

    const section = number >= 1 && number <= 20 ? 'Front' :
                    number > 20 && number <= 40 ? 'Middle' :
                    number > 40 && number <= 60 ? 'Back' 
                    : false;
                    
    const cluster = letter.match(/^[A-C]$/)   ? 'Left' :
                    letter.match(/^[D-F]$/)   ? 'Middle' :
                    letter.match(/^(G|H|K)$/) ? 'Right'
                    : false;

    return section && cluster ? `${section}-${cluster}` : 'No Seat!!';
}

console.log(planeSeat('2B')) // 'Front-Left'
console.log(planeSeat('20B')) // 'Front-Left'
console.log(planeSeat('58I')) // 'No Seat!!'