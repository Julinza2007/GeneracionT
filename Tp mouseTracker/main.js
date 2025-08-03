const body = document.querySelector('body');
const raton = document.getElementById('raton');
let mouseDown = false;

body.addEventListener('mousedown', () => mouseDown = true);
body.addEventListener('mouseup', () => mouseDown = false);

body.addEventListener('mousemove', (e) => {
    if (mouseDown) {
        raton.style.top = e.clientY + 'px';
        raton.style.left = e.clientX + 'px';
    }
});