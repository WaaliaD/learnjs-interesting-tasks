"use strict"

let links = document.querySelectorAll('a');
for (let link of links) {
    if((link.matches('a[href*="://"]')) && !(link.matches('a[href^="http://internal.com"]'))) {
        link.style.color = 'orange';
    }
}