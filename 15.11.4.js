"use strict"

function positionAt(anchor, position, elem) {

    elem.style.position = "absolute";
    let coords = getCoords(anchor);

    switch (position) {
        case "top-out":
            elem.style.left = coords.left + "px";
            elem.style.top = coords.top - elem.offsetHeight + "px";
            break;
        case "right-out":
            elem.style.left = coords.right + "px";
            elem.style.top = coords.top + "px";
            break;
        case "bottom-out":
            elem.style.left = coords.left + "px";
            elem.style.top = coords.bottom + "px";
            break;
        case "top-in" :
            elem.style.left = coords.left + "px";
            elem.style.top = coords.top + "px";
            break;
        case "right-in" :
            elem.style.left = coords.right - elem.offsetWidth + "px";
            elem.style.top = coords.top + "px";
            break;
        case "bottom-in" :
            elem.style.left = coords.left + "px";
            elem.style.top = coords.bottom - elem.offsetHeight + "px";
            break;
    }
}

function getCoords(elem) {
    let box = elem.getBoundingClientRect();

    return {
        top: box.top + window.pageYOffset,
        right: box.right + window.pageXOffset,
        bottom: box.bottom + window.pageYOffset,
        left: box.left + window.pageXOffset
    };
}

function showNote(anchor, position, html) {
    let note = document.createElement('div');
    note.className = "note";
    note.innerHTML = html;
    document.body.append(note);

    positionAt(anchor, position, note);
}

let blockquote = document.querySelector('blockquote');

showNote(blockquote, "top-in", "top-in");
showNote(blockquote, "right-in", "right-in");
showNote(blockquote, "bottom-in", "bottom-in");
showNote(blockquote, "top-out", "top-out");
showNote(blockquote, "right-out", "right-out");
showNote(blockquote, "bottom-out", "bottom-out");