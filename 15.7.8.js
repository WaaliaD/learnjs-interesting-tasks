"use strict"

let timerId;
function clockStart() {
    timerId = setInterval(function () {
        let date = new Date();
        document.getElementById('hh').textContent = `${date.getHours()}`;
        document.getElementById('mm').textContent = `${date.getMinutes()}`;
        document.getElementById('ss').textContent = `${date.getSeconds()}`;
    }, 200);
}

function clockStop() {
    clearInterval(timerId)
    document.getElementById('hh').textContent = `hh`;
    document.getElementById('mm').textContent = `mm`;
    document.getElementById('ss').textContent = `ss`;
}