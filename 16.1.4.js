"use strict"

let x, y;
let field = document.getElementById('field');
let ball = document.getElementById('ball');
field.addEventListener('click', fieldDisplacer);

function fieldDisplacer (event) {
    x = event.clientX - 18 + window.scrollX;
    y = event.clientY - 18 + window.scrollY;

    if (x > field.clientWidth - ball.offsetWidth/2) {
        x = field.clientWidth - ball.offsetWidth/2;
    }
    if (x < ball.offsetWidth/2) {
        x = ball.offsetWidth/2;
    }
    if (y > field.clientHeight - ball.offsetHeight/2) {
        y = field.clientHeight - ball.offsetHeight/2;
    }
    if (y < ball.offsetHeight/2) {
        y = ball.offsetHeight/2;
    }

    ball.style.left = x - ball.offsetWidth/2 + 'px';
    ball.style.top = y - ball.offsetHeight/2 +'px';
}

