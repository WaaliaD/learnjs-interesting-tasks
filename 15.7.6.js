"use strict"

let lis = document.body.getElementsByTagName('li');
for (let li of lis) {
    let liDeep = li.getElementsByTagName('li').length;
    if (liDeep)  {
        li.firstChild.after(`[${liDeep}]`);
    }
}