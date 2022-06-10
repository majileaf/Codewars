/*
Write a function that when given a URL as a string, parses 
out just the domain name and returns it as a string. 

For example:
* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
*/

const domainName = url => 
    url.includes('www') 
        ? url.split('.')[1] 
  : url.includes('//')
        ? url.split('//')[1].split('.')[0]
        : url.split('.')[0]

console.log(domainName("http://google.com")) // "google"
console.log(domainName("http://google.co.jp")) // "google"
console.log(domainName("www.xakep.ru")) // "xakep"
console.log(domainName("https://youtube.com")) // "youtube"