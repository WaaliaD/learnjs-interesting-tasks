'use strict'

let formContainer = document.getElementById('prompt-form-container');
formContainer.hidden = true;
let form = document.getElementById('prompt-form');

document.getElementById('show').addEventListener('click', () => {
    showPrompt("Введите что-нибудь<br>...умное :)", function(value) {
        alert(value);
    });    
})

function keydown(event) {
    if(event.code === 'Escape') {
        delForm();
    }
}

function showPrompt(html, callback) {

    formContainer.hidden = false;
    form.elements.text.focus();
    form.elements.text.addEventListener('keydown', keydown);

    form.elements.cancel.addEventListener('click', delForm)

    document.getElementById('prompt-message').innerHTML = html;

    form.onsubmit = () => {
        callback(`Вы ввели: ${form.elements.text.value || 'null'}`);
        delForm();
    }
}



function delForm() {
    form.elements.text.removeEventListener('keydown', keydown);
    form.elements.text.value = '' 
    formContainer.hidden = true;
}