/* Remove HTML tags using regexp
Remove HTML tags and return string without:
<tag> and </tag>
<tag/>
<tag />
html tags with attributes.
Don't trim space, tab etc.
You have to use regexp.

Tests are using function:
String.prototype.replace(your regexp, "")
*/

var reg = /<.+?>/g

console.log("<div>test</div>".replace(reg, "")) // "test"
console.log("<a href='#'>go to <b>start</b> page</a>".replace(reg, "")) // "go to start page"
console.log("aaabbb<i>sss</i>zzz<hr/>vvv<hr /><br/>".replace(reg, "")) // "aaabbbssszzzvvv"
console.log("<img src='home.jpg'/>foto description".replace(reg, "")) // "foto description"
console.log("<p>first section<b>bold text</b>second part    </p>".replace(reg, "")) // "first sectionbold textsecond part    "
console.log("<div>text\ntext <span>2</span></div>".replace(reg, "")) // text\ntext 2"
console.log("<html lang = 'pl' ><body>content of body ... </body> ... </html>".replace(reg, "")) // "content of body ...  ... "