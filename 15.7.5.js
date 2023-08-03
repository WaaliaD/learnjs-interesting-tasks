"use strict"

let data = {
    "Рыбы": {
        "форель": {},
        "лосось": {}
    },

    "Деревья": {
        "Огромные": {
            "секвойя": {},
            "дуб": {}
        },
        "Цветковые": {
            "яблоня": {},
            "магнолия": {}
        }
    }
};

let container = document.getElementById('container');

function createTree (container, data) {
    for (let key in data) {
        let li = document.createElement('li');
        li.textContent = key
        container.append(li)
        let ul = document.createElement('ul');
        container.append(ul);
        createTree(ul, data[key]);
    }
}

createTree(container, data);