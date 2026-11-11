/* The common directory path
Return please the common directory path for specified array of full filenames.

Some details:
   ['/dream/images/image1.png', '/dream/images/image2.png']  => '/dream/images/'
   ['/http/assets/style.css', '/https/scripts/app.js',  'home/setting.conf'] => ''
   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
   ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'
*/

const getCommonDirectoryPath = paths => {
    const arr = paths.map(e => e.split('/').slice(0, -1));

    let count = 0;
    for (let i = 0; i < arr[0].length; i++) {
        if (paths.every(e => e.startsWith([...arr[0].slice(0, i + 1), ''].join('/')))) count++;
    }
    return [...arr[0].slice(0, count), ''].join('/');
}

console.log(getCommonDirectoryPath(['/dream/images/image1.png', '/dream/images/image2.png'])) // '/dream/images/'
console.log(getCommonDirectoryPath(['/http/assets/style.css', '/https/scripts/app.js',  'home/setting.conf'])) // ''
console.log(getCommonDirectoryPath(['/web/assets/style.css', '/.bin/mocha',  '/read.me'])) // '/'
console.log(getCommonDirectoryPath(['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'])) // '/'
console.log(getCommonDirectoryPath(['images/me/public', 'images/https/images'])) // 'images/'