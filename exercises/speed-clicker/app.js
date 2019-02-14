var button = document.getElementById("button");
var counter = document.getElementById("counter");
var count = localStorage.count || 0;
counter.textContent = count;

button.addEventListener("click",counterFunc);
function counterFunc(event){
    localStorage.count++;
    counter.innerHTML = localStorage.count;
}

// timer countdown bar begin and end event

button.addEventListener("click", timer);

function timer(event) {
    event.target.removeEventListener(event.type,arguments.callee);
    var timeleft = 10;
    var downloadTimer = setInterval(function(){
        document.getElementById("progressBar").value = 10 - timeleft;
        timeleft -= 1;
    }, 1000);
}
