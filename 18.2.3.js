'use strict'
let mouse = document.getElementById('mouse');
let coords = mouse.getBoundingClientRect();
mouse.style.position = 'fixed';
mouse.style.top = coords.top + 'px';
mouse.style.left = coords.left + 'px';

mouse.addEventListener('click', () => {
    mouse.tabIndex = '0';
    mouse.focus();
    mouse.addEventListener('keydown', keydown)

    function keydown(event) {
        coords = mouse.getBoundingClientRect();
        switch(event.code) {
            case 'KeyW':
                mouse.style.top = coords.top - 100 + 'px';
                break;
            case 'KeyA':
                mouse.style.left = coords.left - 100 + 'px';
                break;
            case 'KeyS':
                mouse.style.top = coords.top + 100 + 'px';
                break;
            case 'KeyD':
                mouse.style.left = coords.left + 100 + 'px';
                break;
        }
    }

    mouse.addEventListener('blur', () => {
        mouse.removeEventListener('keydown', keydown);
    })
})