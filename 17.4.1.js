'use strict'

runOnKeys(
    () => alert("Привет!"),
    "KeyQ",
    "KeyW"
);

function runOnKeys(func, ...arg) {
    let set = new Set();
    document.addEventListener('keydown', function (event) {
        for (let argElement of arg) {
            if (argElement === event.code) set.add(argElement);
        }

        if (set.size === arg.length) {
            func();
            set.clear();
        }

    });

    document.addEventListener('keyup', function (event) {
        for (let argElement of arg) {
            if (argElement === event.code) set.delete(argElement);
        }
    });


}