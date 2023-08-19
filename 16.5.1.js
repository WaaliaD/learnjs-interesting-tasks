"use strict"

let random = new CustomEvent('randomPhotoChanger', {bubbles: true, cancelable: true}),
    circle = new CustomEvent('circlePhotoChanger', {bubbles: true, cancelable: true, detail: {count: 0}});

document.getElementById('largeImg').addEventListener('randomPhotoChanger', randomPhotoChanger);
document.getElementById('largeImg').addEventListener('circlePhotoChanger', circlePhotoChanger);
document.getElementById('thumbs').addEventListener('click', ulsHandler);

document.getElementById('random').addEventListener('click', () => document.getElementById('largeImg').dispatchEvent(random));
document.getElementById('circle').addEventListener('click', () => document.getElementById('largeImg').dispatchEvent(circle));

function ulsHandler(event) {
    event.preventDefault();
    let closestA = event.target.closest('a');
    if (document.getElementById('thumbs').contains(closestA)) {
        document.getElementById('largeImg').src = closestA.href;
    }
}

function randomPhotoChanger() {

    // I'm not sure if this pseudo-random number generator works correctly
    // I just took this formula "min + Math.random() * (max + 1 - min)"
    // and simplified it, because min = 0, same as "-1 +1"
    // original idea was like:
    // let rand = randomInteger(0, document.getElementById('thumbs').children.length - 1)

    let rand = Math.floor(Math.random() * (document.getElementById('thumbs').children.length));
    let ourA = document.getElementById('thumbs').children[rand];
    if (document.getElementById('thumbs').contains(ourA)) {
        document.getElementById('largeImg').src = ourA.firstElementChild.href;
    }
    setTimeout(() => {
        document.getElementById('largeImg').dispatchEvent(random)
    }, 1000)
}

function circlePhotoChanger(event) {
    let ourA = document.getElementById('thumbs').children[event.detail.count];
    if (document.getElementById('thumbs').contains(ourA)) {
        document.getElementById('largeImg').src = ourA.firstElementChild.href;
    }
    if (++event.detail.count > 4) event.detail.count = 0;
    setTimeout(() => {
        document.getElementById('largeImg').dispatchEvent(circle)
    }, 1000)
}