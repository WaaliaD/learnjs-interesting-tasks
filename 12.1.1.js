"use strict"

function* pseudoRandom (num) {
    let previous = num;
    while (true) yield previous = previous * 16807 % 2147483647;
}
