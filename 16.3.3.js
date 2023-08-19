"use strict"

document.getElementById('grid').addEventListener('click', function (event) {
    this.tBodies[0].append(
        ...Array.from(this.rows)
            .slice(1)
            .sort((rowA, rowB) => {
                if (event.target.dataset.type === "number") {
                    return +rowA.cells[0].innerHTML > +rowB.cells[0].innerHTML ? 1 : -1
                }
                else {
                    return ('' + rowA.cells[1].innerHTML).localeCompare(rowB.cells[1].innerHTML)
                }
            }),
    );
});