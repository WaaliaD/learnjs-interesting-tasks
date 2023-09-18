'use strict'

let view = document.getElementById('view')

view.addEventListener('click', (event) => {
    let edit = document.createElement('textarea');
    edit.classList.add("edit");
    edit.id = "edit";
    edit.value = view.innerHTML;
    
    edit.addEventListener('keydown', (event) => {
        if (event.key == 'Enter') {
            edit.blur();
        }
    })

    edit.addEventListener('blur', () => {
        view.innerHTML = edit.value;
        edit.replaceWith(view);
    })

    view.replaceWith(edit);
    edit.focus();
});