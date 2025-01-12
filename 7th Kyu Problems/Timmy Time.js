/* Timmy Time
Write a function changeTime which increases or decreases given time. 
Input param is string in HH:MM format and delta is integer value -1 or 1 in minutes. 

Let see some examples:
changeTime('10:00', 1) //return '10:01'
changeTime('10:00', -1) //return '09:59'
changeTime('23:59', 1) //return '00:00'
changeTime('00:00', -1) //return '23:59'
*/

const changeTime = (input, delta) => {
    const [hh, mm] = input.split(':').map(Number);
    const time = new Date(null);
    time.setHours(hh, mm + delta);
    return time.toTimeString().slice(0, 5);
}

console.log(changeTime('10:00', 1)) //return '10:01'
console.log(changeTime('10:00', -1)) //return '09:59'
console.log(changeTime('23:59', 1)) //return '00:00'
console.log(changeTime('00:00', -1)) //return '23:59'