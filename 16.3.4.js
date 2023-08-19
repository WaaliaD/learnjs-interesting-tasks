"use strict"

function mouseover (event) {
    if(event.target.dataset.tooltip) {
        let message = document.createElement('div'),
            coords = event.target.getBoundingClientRect();

        event.target.before(message);

        message.innerHTML = event.target.dataset.tooltip;
        message.classList.add('tooltip');

        {
            if (coords.y + 5 < message.offsetHeight) {
                message.style.top = coords.y + event.target.offsetHeight + 5 + 'px';
            }
            else {
                message.style.top = coords.y - message.offsetHeight - 5 + 'px';
            }
            message.style.left = coords.x + event.target.offsetWidth/2 - Math.min(message.offsetWidth/2, coords.x + event.target.offsetWidth/2) + 'px';
        }
    }
}

function mouseout (event) {
    if(event.target.dataset.tooltip) {
        document.getElementsByClassName('tooltip')[0].remove()
    }
}

document.addEventListener('mouseover', mouseover)
document.addEventListener('mouseout', mouseout)