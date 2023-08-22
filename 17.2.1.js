"use strict"

let message = document.createElement('div');
document.getElementById('house').append(message);
message.classList.add('tooltip');
message.hidden = true;
message.style.position = 'absolute'


document.getElementById('house').addEventListener('mouseover', (event) => {
    let elem = event.target.closest('[data-tooltip]'),
        coords = elem.getBoundingClientRect();
    if (elem.dataset.tooltip) {
        message.hidden = false;
        message.innerHTML = elem.dataset.tooltip;
        message.style.left = coords.left + coords.width / 2 - message.clientWidth / 2 + window.pageXOffset + 'px';
        message.style.top = coords.top - message.clientHeight + window.pageYOffset < window.pageYOffset
            ? coords.top + window.pageYOffset + coords.height + 'px'
            : coords.top - message.clientHeight + window.pageYOffset + 'px';
    }
})

document.getElementById('house').addEventListener('mouseout', (event) => {
    if (!document.getElementById('house').contains(event.relatedTarget)) { message.hidden = true; }
})