document.getElementById('box').addEventListener('mouseover',onMouse);
function onMouse() {
    document.getElementById('box').style.backgroundColor = 'blue'
}

document.getElementById('box').addEventListener('mousedown',onMouseDown);
function onMouseDown() {
    document.getElementById('box').style.backgroundColor = 'red'
}

document.getElementById('box').addEventListener('mouseup',onMouseUp);
function onMouseUp() {
    document.getElementById('box').style.backgroundColor = 'yellow'
}

document.getElementById('box').addEventListener('dblclick',onMouseDbl);
function onMouseDbl() {
    document.getElementById('box').style.backgroundColor = 'green'
}

document.addEventListener('wheel',wheeled);
function wheeled() {
    document.getElementById('box').style.backgroundColor = 'orange'
}

document.addEventListener("keypress", keys);
function keys(event) {
    switch (event.key) {
        case 'b':
            document.getElementById('box').style.backgroundColor = 'blue';
            break;
        case 'r':
            document.getElementById('box').style.backgroundColor = 'red';
            break;
        case 'y':
            document.getElementById('box').style.backgroundColor = 'yellow';
            break;
        case 'g':
            document.getElementById('box').style.backgroundColor = 'green';
            break;
        case 'o':
            document.getElementById('box').style.backgroundColor = 'orange';
            break;
        default:
            console.log('invalid key')
    }
}