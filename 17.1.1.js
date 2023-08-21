"use strict"

let ul = document.getElementById('ul');

ul.addEventListener('mousedown', (event) => event.preventDefault())

ul.addEventListener('click', (event) => {
    if (!event.ctrlKey && !event.metaKey) {
        for (let selected of ul.querySelectorAll('.selected')) {
            selected.className = '';
        }
    }

    if (event.target.tagName === 'LI') {
        event.target.classList.add('selected')
    }
})