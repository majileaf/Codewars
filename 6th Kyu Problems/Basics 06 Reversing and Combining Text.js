/* Basics 06: Reversing and Combining Text
Your task is to Reverse and Combine Words. It's not too difficult, but there are some things you have to consider...
So what to do?

Input: String containing different "words" separated by spaces

1. More than one word? Reverse each word and combine first with second, third with fourth and so on...
   (odd number of words => last one stays alone, but has to be reversed too)
2. Start it again until there's only one word without spaces
3. Return your result...

Some easy examples:

Input:  "abc def"
Output: "cbafed"

Input:  "abc def ghi 123"
Output: "defabc123ghi"

Input:  "abc def gh34 434ff 55_eri 123 343"
Output: "43hgff434cbafed343ire_55321"

I think it's clear?! First there are some static tests, later on random tests too...
Hope you have fun! :-)
*/

const reverse_and_combine_text = str => {
    str = str.split(' ')
    while (str.length !== 1) {
        str = str.map(e => [...e].reverse().join(''));
        let arr = [];
        for (let i = 0; i < Math.ceil(str.length / 2) * 2; i += 2) {
            arr.push(str[i] + (str[i + 1] || ''));
        }
        str = arr;
    }
    return str[0];
}

console.log(reverse_and_combine_text("abc def")) // "cbafed"
console.log(reverse_and_combine_text("abc def ghi jkl")) // "defabcjklghi"
console.log(reverse_and_combine_text("dfghrtcbafed")) // "dfghrtcbafed"
console.log(reverse_and_combine_text("234hh54 53455 sdfqwzrt rtteetrt hjhjh lllll12  44")) // "trzwqfdstrteettr45hh4325543544hjhjh21lllll"
console.log(reverse_and_combine_text("sdfsdf wee sdffg 342234 ftt")) // "gffds432243fdsfdseewttf"