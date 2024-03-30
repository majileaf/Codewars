/* Measuring Average Speed
Speed is a crucial measure of success for any aspiring warrior, so let's write a function to calculate it.
Average Speed is calculated by dividing distance by time. Given two strings as input the first of which 
indicates a codewarrior's distance travelled (in metres or kilometres) and the second indicating the time 
it takes them to travel (in seconds or minutes), return a string indicating their speed in miles per hour 
rounded to the nearest integer.

For the purposes of this kata one metre per second is defined as 2.23694 miles per hour.

So for example given the input values of distance & time "3km" and "5min" we should return a speed value of "22mph".
*/

const calculateSpeed = (distance, time) => {
    const m = distance.includes('km') ? distance.slice(0, -2) * 1000 : distance.slice(0, -1);
    const s = time.includes('min') ? time.slice(0, -3) * 60 : time.slice(0, -1);
    return `${Math.round(m * 2.23694 / s)}mph`;
}

console.log(calculateSpeed("100m", "10s")) // "22mph"
console.log(calculateSpeed("3km", "5min")) // "22mph"
console.log(calculateSpeed("35m", "293s")) // "0mph"
console.log(calculateSpeed("573km", "39min")) // "548mph"