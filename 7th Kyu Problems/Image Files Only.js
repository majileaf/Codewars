/* Image Files Only
Build a function that will take an array of filenames (as string) and return an array of array. Each array will provide 3 informations about the image file: the full filename, its name and the extension. (See the example below)

Detect the image files based on the end of the filename which is their format (extension).
Image files are defined as jpg, gif, png, tiff, svg and bmp. So "puppies.jpg" is a image file while "puppies.html" is not.

For example:
Input: ["imgName.extension", "notAnImg"]
Output: [["imgName.extension", "imgName", "extension"], null]

So:
imageFilter(["index.html", "favicon.gif"])
return [null, ["favicon.gif", "favicon", "gif"]] 

!Non Case Sensitive, so a file with the extension .jpg or .JPG is still an image.
*/

const imageFilter = arr => arr.map(e => /\w+\.(jpg|gif|png|tiff|svg|bmp)$/i.test(e) ? [e, ...e.match(/\w+/gi)] : null);

console.log(imageFilter(["favicon.gif", "img.tiff"])) // [["favicon.gif", "favicon", "gif"], ["img.tiff", "img", "tiff"]]
console.log(imageFilter(["index.html", "seattle.jpg"])) // [null, ["seattle.jpg", "seattle", "jpg"]]
console.log(imageFilter([".bash_profile", "workspace.doc", "img0912.jpg"])) // [null, null, ["img0912.jpg", "img0912", "jpg"]]