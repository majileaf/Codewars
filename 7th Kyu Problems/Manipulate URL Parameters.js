/* Manipulate URL Parameters
You need to write a function ( addOrChangeUrlParameter(url, keyValueParameter) ) that can manipulate URL parameters.

It should be able to
    add a parameter to an existing URL,
but also to
    change a parameter if it already exists.

Example:
addOrChangeUrlParameter("www.example.com", "key=value") 
// -> 'www.example.com?key=value' (adds a parameter).

addOrChangeUrlParameter("www.example.com?key=value", "key2=value2" ) 
// -> 'www.example.com?key=value&key2=value2' (adds another parameter).

addOrChangeUrlParameter("www.example.com?key=oldValue`", "key=newValue" ) 
// ->'www.example.com?key=newValue' (changes the parameter).
*/

/**
 * Play with URLs
 * @param {string} url - The URL that's we want to manipulate
 * @param {string} param - The parameter that we want to change or add
 * @returns {string} The result URL.
 */

const addOrChangeUrlParameter = (url, param) => {
    if (!param.length) return url;
    else if (!url.match(/\?/)) return url + '?' + param;

    const urlOnly = url.match(/.+(?=\?)/)[0];
    const [key, value] = param.split('=');
    let keys = url.match(/(?<=\?|\&)\w+(?=\=)/g);
    let values = url.match(/(?<=\=)\w+(?=\&?)/g);

    if (keys.includes(key)) {
        values[keys.indexOf(key)] = value;
    } else {
        keys = [...keys, key];
        values = [...values, value];
    }
    return urlOnly + '?' + [...Array(keys.length)].map((_, i) => keys[i] + '=' + values[i]).join('&');
}

console.log(addOrChangeUrlParameter("www.example.com", "key=value")) // -> 'www.example.com?key=value'
console.log(addOrChangeUrlParameter("www.example.com?key=value", "key2=value2" )) // -> 'www.example.com?key=value&key2=value2'
console.log(addOrChangeUrlParameter("www.example.com?key=oldValue`", "key=newValue" )) // -> 'www.example.com?key=newValue'