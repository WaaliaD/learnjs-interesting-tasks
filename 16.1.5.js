"use strict"

let button = document.getElementById('button');

shower();

function shower () {
    document.getElementById('show').hidden = true;
    document.getElementById('list').hidden = true;
    document.getElementById('hide').hidden = false;
    button.removeEventListener('click', shower);
    button.addEventListener('click', hider)
}
function hider () {
    document.getElementById('hide').hidden = true;
    document.getElementById('show').hidden = false;
    document.getElementById('list').hidden = false;
    button.removeEventListener('click', hider);
    button.addEventListener('click', shower)

}