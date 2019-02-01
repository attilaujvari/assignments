function mouseOn(event) {
    var coordinates = document.getElementById('coordinateBox')
    console.log(event.offsetX)
    coordinates.textContent = event.offsetX + ' ; ' + event.offsetY;

    // var coords = document.getElementById('coordinateBox')
    coordinateBox.appendChild('coords')
}