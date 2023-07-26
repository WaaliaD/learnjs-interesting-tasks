"use strict"

function makeObservable(target) {
    target.observe = (args) => target._observeHandler = args

    return new Proxy(target, {
        set(target, prop, val, receiver) {
            if(target._observeHandler) target._observeHandler(prop, val);
            return Reflect.set(target, prop, val, receiver);
        }}
    )
}