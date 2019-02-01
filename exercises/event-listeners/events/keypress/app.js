/* You're task is to display to the user the key and key code they press
Example of output: You've pressed the "a" key. It's key code is 65

Wes Bos made this https://keycode.info/ for us to use as an example */




window.addEventListener('keypress', function(event){
    var keyPressed = document.createElement('keyCodeDisplay')
    // var keyCode = event.which
    keyPressed.textContent = event.which
    var keyCodeDisplay = document.getElementById('keyCodeDisplay')
    keyCodeDisplay.appendChild(keyPressed)


    var keyNamed = document.createElement('keyPressedDisplay')
    // var keyName = event.key
    keyNamed.textContent = event.key
    var keyPressedDisplay = document.getElementById('keyPressedDisplay')
    keyPressedDisplay.appendChild(keyNamed)

})


