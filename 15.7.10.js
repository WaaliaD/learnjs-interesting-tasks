"use strict"

let rows = []
for (let row of document.getElementsByTagName('tbody')[0].rows) {

    let cells = [];

    for (let cell of row.cells) {
        cells.push(cell.textContent)
    }

    rows.push(cells)
}

rows.sort(function (a, b) {
    if (a[0] >= b[0]) return 1;
    if (a[0] === b[0]) return 0;
    if (a[0] <= b[0]) return -1;
})

let row = document.getElementsByTagName('tbody')[0].rows;

for (let i = 0; i < row.length; i++) {
    for (let j = 0; j < row[i].cells.length; j++) {
        row[i].cells[j].innerHTML = rows[i][j];
    }
}