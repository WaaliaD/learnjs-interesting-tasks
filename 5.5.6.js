"use strict"

function Calculator(str) {
    this.calc = new Map();
    this.calc.set("+", (a, b) => a + b);
    this.calc.set("-", (a, b) => a - b);

    this.addMethod = function (name, func) {
        this.calc.set(name, func);
    }

    this.calculate = function (str) {
        let symbols = str.split(' ');

        if (!isFinite(symbols[0])) return 'Первый операнд не является числом'
        if (!isFinite(symbols[2])) return 'Второй операнд не является числом'
        if (!this.calc.has(symbols[1])) return 'Такого оператора нет в калькуляторе'

        let fun = this.calc.get(symbols[1])
        return fun(+(symbols[0]), +symbols[2]);
    }
}