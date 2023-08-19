"use strict"

document.getElementById('thumbs').addEventListener('click', ulsHandler);

function ulsHandler (event) {
    event.preventDefault();
    let closestA = event.target.closest('a');
    if (document.getElementById('thumbs').contains(closestA)) {
        document.getElementById('largeImg').src = closestA.href;
    }
}