'use strict'

let form = document.forms.calculator;

form.addEventListener('input', () => {
    let initial = +form.elements.money.value, // Первоначальный депозит
        years = +form.elements.months.value / 12, // Срок вклада
        interest = +form.elements.interest.value / 100; // Годовая процентная ставка

    let result = Math.round(initial * (1 + interest) ** years);

    document.getElementById('money-before').innerHTML = `Было: ${initial}`
    document.getElementById('money-after').innerHTML = `Станет: ${result}`

    document.getElementById('height-after').style.height = (result/initial)*100 + 'px'
});