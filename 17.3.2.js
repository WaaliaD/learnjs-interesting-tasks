'use strict'

document.addEventListener('mousedown', (event) => {

    if (!event.target.classList.contains('draggable')) { return; } else { event.preventDefault() }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    const shiftX = event.clientX - event.target.getBoundingClientRect().left,
        shiftY = event.clientY - event.target.getBoundingClientRect().top;

    function onMouseUp() {
        if (!event.target.classList.contains('draggable')) { return; } else { event.preventDefault() }

        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
        event.target.style.top = event.target.getBoundingClientRect().top + window.pageYOffset + 'px';
        event.target.style.left = event.target.getBoundingClientRect().left + 'px';
        event.target.style.position = 'absolute'
    }

    function onMouseMove(event) {

        if (!event.target.classList.contains('draggable')) { return; }

        event.target.style.position = 'fixed';

        event.target.style.top = event.clientY - shiftY + 'px';
        event.target.style.left = event.clientX - shiftX + 'px';


        if (event.clientY - shiftY + event.target.clientHeight > document.documentElement.clientHeight) {
            window.scrollBy(0,10);
            event.target.style.top = document.documentElement.clientHeight - event.target.clientHeight + 'px';
        }

        if (event.clientY - shiftY < 0) {
            window.scrollBy(0,-10);
            event.target.style.top = 0 + 'px';
        }

        if (event.clientX - shiftX + event.target.clientWidth > document.documentElement.clientWidth) {
            event.target.style.left = document.documentElement.clientWidth - event.target.clientWidth + 'px';
        }

        if (event.clientX - shiftX < 0) {
            event.target.style.left = 0 + 'px';
        }
    }
})