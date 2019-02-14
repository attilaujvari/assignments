// Site setup //
var imageEdit = document.createElement("img");
imageEdit.src = "./icon_edit.png";
var imageDelete = document.createElement("img");
imageDelete.src = "./icon_delete.png";
// Date function and population to HTML
var date = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("todayDay").innerHTML = days[date.getDay()];
document.getElementById("todayDate").innerHTML = months[date.getMonth()] + " " + date.getDate();

// Dynamic greeting (based on time, name later) ////////////////////////////
var curHr = date.getHours();
if (curHr >= 0 && curHr < 6) {
    document.getElementById("greeting").innerText = 'What are you doing this early?';
} else if (curHr >= 6 && curHr < 12) {
    document.getElementById("greeting").innerText = 'Good morning';
} else if (curHr >= 12 && curHr < 17) {
    document.getElementById("greeting").innerText = 'Good afternoon';
} else {
    document.getElementById("greeting").innerText = 'Good evening';
}


var todoList = document.getElementById('todo-item-list')
axios.get("https://api.vschool.io/attila/todo").then(function(response){
    var todos = response.data;
    listTodos(todos)
}).catch(function(error){
    console.log(error)
});

function listTodos(todos){
    for(var i = 0; i < todos.length; i++){
        var title = document.createElement('li');
        title.textContent = todos[i].title;
        todoList.appendChild(title);
        todoList.appendChild(imageEdit).className = "icon";
        todoList.appendChild(imageDelete).className = "icon"
    }
}