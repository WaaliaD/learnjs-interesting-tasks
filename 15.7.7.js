"use strict"

//WARNING
// some kind of trash-code

function createCalendar(elem, year, month) {

    calendarTableGenerator(elem)

    let date = new Date(year, month-1);
    let dayOfWeek = { 0: 7, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6 }
    let table = elem.firstElementChild;

    for (let i = dayOfWeek[date.getDay()]; i <= 42; i++) {
        if (!table.children[(Math.floor(i/7.1)+1)]) {
            addRowToTable(table)
        }

        table.children[(Math.floor(i/7.1)+1)].children[dayOfWeek[date.getDay()]-1].textContent = `${date.getDate()}`;
        date.setDate(date.getDate()+1);

        if(date.getMonth() !== (month-1)) break; // limit == 1 month
    }
}

function calendarTableGenerator (elem) {

    elem.append(document.createElement('table'));

    let table = elem.firstElementChild

    addRowToTable(table);

    for (let i = 0; i < 7; i++) {
        let dayOfWeek = { 0: 'ПН', 1: 'ВТ', 2: 'СР', 3: 'ЧТ', 4: 'ПТ', 5: 'СБ', 6: 'ВС' }
        table.firstElementChild.children[i].textContent = dayOfWeek[i];
    }
}

function addRowToTable(table) {
    let tr = document.createElement('tr');

    for (let i = 0; i < 7; i++) {
        let td = document.createElement('td');
        tr.appendChild(td);
    }

    table.appendChild(tr);
}

for (let i = 1; i <= 12; i++) {
    createCalendar(document.getElementById(`${i}`), 2012, i); // getElementById('calendar')
}