"use strict"

function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

function cachingDecorator(func) {
    let cache = new Map();

    return function(x) {
        if (cache.has(x)) {
            return cache.get(x);
        }

        let result = func(x);

        cache.set(x, result);
        return result;
    };
}

fib = cachingDecorator(fib);