/* Strip Url Params
Complete the method so that it does the following:
    Removes any duplicate query string parameters from the url (the first occurence should be kept)
    Removes any query string parameters specified within the 2nd argument (optional array)

Examples:
stripUrlParams('www.codewars.com?a=1&b=2&a=2') === 'www.codewars.com?a=1&b=2'
stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']) === 'www.codewars.com?a=1'
stripUrlParams('www.codewars.com', ['b']) === 'www.codewars.com'
*/

const stripUrlParams = (url, paramsToStrip = []) => {
    
}

console.log(stripUrlParams('www.codewars.com?a=1&b=2')) // 'www.codewars.com?a=1&b=2', "Didn't return correct value when given a url that had nothing to be stripped"
console.log(stripUrlParams('www.codewars.com?a=1&b=2&a=1&b=3')) // 'www.codewars.com?a=1&b=2', "Didn't strip duplicates from url"
console.log(stripUrlParams('www.codewars.com?a=1&b=2&a=1&b=3', ['b'])) // 'www.codewars.com?a=1', "Didn't strip param that was specified in paramsToStrip array"
console.log(stripUrlParams('www.codewars.com', ['b'])) // 'www.codewars.com', "Didn't return an un-modifed url when there was nothing to strip"
console.log(stripUrlParams('www.codewars.com?a=1&b=2', ['a', 'b'])) // 'www.codewars.com', "Didn't strip all parameters"