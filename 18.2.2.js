'use strict'

let table = document.getElementById('bagua-table');

table.addEventListener('click', hendler)

function hendler(event) {
    let td = event.target.closest("td")
    console.log(111);
    table.removeEventListener('click', hendler);

    let text = document.createElement('textarea');
    text.classList.add("text");
    text.id = "text";
    text.value = td.innerHTML;
    text.style.width = '164px';
    text.style.height = '86px';
    text.style.verticalAlign = 'middle';
    text.style.fontSize = '13px';

    td.replaceWith(text);
    text.focus();

    let ok = document.createElement('button');
    ok.innerHTML = 'OK';
    ok.id = 'ok';
    ok.style.position = 'absolute';

    let cancel = document.createElement('button');
    cancel.innerHTML = 'CANCEL';
    cancel.id = 'cancel';
    cancel.style.position = 'absolute';

    text.after(ok)
    text.after(cancel)

    let coords = text.getBoundingClientRect()

    ok.style.top = coords.bottom + 'px';
    ok.style.left = coords.left + 'px';
    cancel.style.top = coords.bottom + 'px';
    cancel.style.left = coords.left + ok.offsetWidth + 'px';

    ok.addEventListener('click', () => {
        td.innerHTML = text.value;
        text.replaceWith(td);
        cancel.remove();
        ok.remove();
        setTimeout(() => {
            table.addEventListener('click', hendler)
        }, 0)
    })

    cancel.addEventListener('click', () => {
        text.replaceWith(td);
        cancel.remove();
        ok.remove();
        setTimeout(() => {
            table.addEventListener('click', hendler)
        }, 0)
    })
}