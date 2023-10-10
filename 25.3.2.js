'use strict'

const bounceEaseOut = makeEaseOut(bounce),
    quadEaseOut = makeEaseOut(quad);

document.getElementById('ball').addEventListener('click', () => {
    animate(bounceEaseOut, down, 2000)
    animate(quadEaseOut, sideways, 2000)
    }
)

function animate(timing, draw, duration) {
    let start = performance.now();
  
    requestAnimationFrame(function animate(time) {
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;
  
        let progress = timing(timeFraction);
  
        draw(progress);
  
        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }
    });
}

function down(progress) {
    document.getElementById('ball').style.top = progress * 160 + 'px';
}

function sideways(progress) {
    document.getElementById('ball').style.left = progress * 100 + 'px';
}

function bounce(timeFraction) {
    for (let a = 0, b = 1; 1; a += b, b /= 2) {
        if (timeFraction >= (7 - 4 * a) / 11) {
            return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
        }
    }
}

function quad(timeFraction) {
    return Math.pow(timeFraction, 2)
}

function makeEaseOut(timing) {
    return function(timeFraction) {
        return 1 - timing(1 - timeFraction);
    }
}