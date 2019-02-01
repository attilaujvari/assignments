// EVENTS & EVENT LISTENERS

var helloBtn = document.getElementById("hello-btn")

// 1. What event     
// 2. What do you want to happen on said event
// helloBtn.addEventListener("click", sayHello)
// helloBtn.addEventListener("click", function(){
//     alert("Hello!")
// })

// Named function
function sayHello(event){
    console.log(event)
    alert("Hello!")
}

// Anonymous function - functions that don't have a name
// Event Loop - Running in the background listening for events.
    // Event bubbling, Event Capturing

// Common events
// click, submit, hover, keypress, mouseover, mousein, mouseout

// Event Object => all information about the given event   
    // Event object automatically 'passed' to the function being used on the event.  
        // Must add a parameter like "event" to the function parameter so you can
        // reference it in the function.

// helloBtn.addEventListener("click", function(event){
//     console.log(event)
// })

helloBtn.addEventListener("click", sayHello)

// We want certain events to be for the entire webpage, such as when a user
// presses a key on their keyboard.
window.addEventListener('keypress', function(event){
    if(event.which === 97){
        console.log("You pressed the A key")
    }
})