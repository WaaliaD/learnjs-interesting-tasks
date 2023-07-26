"use strict"

let array = [1, 2, 3];

array = new Proxy(array, {
    get(target, p, receiver) {
        if (p < 0) {
            return Reflect.get(target, target[target.length+(p-1)], receiver)
        } else {
            return Reflect.get(target, p, receiver)
        }
    }
});

alert(array[-1]);
alert(array[-2]);