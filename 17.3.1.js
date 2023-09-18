'use strict'

const thumb = document.querySelector('.thumb'),
    slider = document.getElementById('slider');

thumb.addEventListener('mousedown', (event) => {

    const shiftX = event.clientX - thumb.getBoundingClientRect().left;

    function onMouseMove(event) {
        let pos = event.clientX - shiftX - slider.getBoundingClientRect().left

        pos = pos > slider.offsetWidth - thumb.offsetWidth
            ? slider.offsetWidth - thumb.offsetWidth
            : pos < 0
                ? 0
                : pos

        thumb.style.left = pos + 'px';
    }

    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }

    thumb.addEventListener('dragstart', (event) => event.preventDefault())
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp)

})

