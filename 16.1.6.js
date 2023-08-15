"use strict"

//<button class="remove-button">[x]</button>

let elements = document.getElementsByClassName('pane');

for (let element of elements) {
    let button = document.createElement('button');
    button.innerHTML = '[x]';
    button.classList.add("remove-button");
    button.addEventListener('click', function () {this.parentNode.hidden = true;})
    element.prepend(button)
}

