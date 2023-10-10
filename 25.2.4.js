let btn = document.getElementById('btn'),
    circle = document.querySelector('.circle');

function showCircle(cx, cy, radius, callback) {
    let k = 0;

    circle.style.top = cy + radius + 'px';
    circle.style.left = cx + radius + 'px';
    circle.style.width = radius * 2 + 'px';
    circle.style.height = radius * 2 + 'px';

    circle.addEventListener('transitionend', () => {
    if (++k==2) {
        callback(circle);
    }
    })
}

btn.addEventListener('click', () => showCircle(150, 150, 100, div => {
    div.classList.add('message-ball');
    div.append("Hello, world!");
    })
);