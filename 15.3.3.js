"use strict"

let table = document.body.firstElementChild;
let r = 0;
for (let tableRows of table.rows) {
    r++;
    let c = 0;
    for (let tableRowCells of tableRows.cells) {
        if (++c===r) tableRowCells.style.backgroundColor = 'red';
    }
}