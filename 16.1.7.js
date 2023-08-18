"use strict"

let ul = document.querySelector('ul'),
    liLength = document.querySelectorAll('li').length,
    position = 0,
    soloWidth = 130,
    rowCount = 3;

function left() {
    position-=(soloWidth*rowCount);
    if(position<0) position=0;
    ul.style.right = position + 'px';
}

function right() {
    position+=(soloWidth*rowCount);
    if(position>(liLength-rowCount)*soloWidth) position=(liLength-rowCount)*soloWidth;
    ul.style.right = position + 'px';
}

document.getElementById('left').addEventListener('click', left)
document.getElementById('right').addEventListener('click', right)