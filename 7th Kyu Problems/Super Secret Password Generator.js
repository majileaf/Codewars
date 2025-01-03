/* Super Secret Password Generator
Sys Admins are always on your case to improve the strength of your passwords. 
You could really use a handy function to make your passwords completely un-hackable.

Use the super secret characters in the superSecretChars variable to replace 
the matching characters in your totally insecure password and make it un-hackable.

eg. replace all 'a's with '@'s. Make sure you get the upper case characters too just 
in case the user wants to SHOUT their password at you.
*/

//These are your super secret characters you will use to make the password super secure
const superSecretChars = {a: '@', s: '$', o: '0', h: '5', x: '*'};
const createSSP = password => password.replace(/[asohx]/gi, char => superSecretChars[char.toLowerCase()]);

console.log(createSSP("haxorpassword")) // "5@*0rp@$$w0rd"
console.log(createSSP("HaxorPassword")) // "5@*0rP@$$w0rd"
console.log(createSSP("MuchSecureVeryPassword")) // "Muc5$ecureVeryP@$$w0rd"
console.log(createSSP("")) // ""