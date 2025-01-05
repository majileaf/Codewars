/* Color of the moment
Imagine you have a digital clock which paints the whole screen with a color instead of showing you what time it is. 
While it looks good on your wall and you get to impress your guests, you also want to be able to tell what time it is. 
Luckily, the clock also prints the hex code in the bottom right of the screen. 
Using that, you should be able to tell the time, which is another way to impress your guests :)

The hex code will come to you in this format: #0d242c

And you will return the time in this format: hh:mm:ss

Note: The hexCode you will be provided will always be in the correct format. 
However, it might not point to a correct time. 
So make sure to throw an error if the time you have calculated is invalid.
*/

const hexToTime = hexCode => {
    const [hh, mm, ss] = [...Array(3)].map((_, i) => String(parseInt(hexCode.slice(1 + i * 2, 3 + i * 2), 16)).padStart(2, '0'));
    if (hh > 23 || mm > 59 || ss > 59) throw new Error();
    return `${hh}:${mm}:${ss}`;
}

console.log(hexToTime('#0d3737')) // '13:55:55'

console.log(hexToTime('#013c37')) // '01:60:55'
console.log(hexToTime('#2c3721')) // '44:55:33'
console.log(hexToTime('#183737')) // '24:55:55'
console.log(hexToTime('#0d373c')) // '13:55:60'
console.log(hexToTime('#0d3c37')) // '13:60:55'
console.log(hexToTime('#180000')) // '24:00:00'