/* Problems with JS:
Submit button doesn't change attributes to edit button to change color and call Put request with sessionID instead of Post
*/

// Site setup //
let todoList = document.getElementById('todo-item-list');
// Date function and population to HTML //
let date = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//today
document.getElementById("todayDay").innerHTML = days[date.getDay()];
document.getElementById("todayDate").innerHTML = months[date.getMonth()] + " " + date.getDate();

// Dynamic greeting (based on time, name maybe later) //
let curHr = date.getHours();
if (curHr >= 0 && curHr < 6) {
    document.getElementById("greeting").innerText = 'What are you doing this early?';
} else if (curHr >= 6 && curHr < 12) {
    document.getElementById("greeting").innerText = 'Good morning';
} else if (curHr >= 12 && curHr < 17) {
    document.getElementById("greeting").innerText = 'Good afternoon';
} else {
    document.getElementById("greeting").innerText = 'Good evening';
}

function getData(){
axios.get("https://api.vschool.io/attila/todo").then(response => {
    const todoItemData = response.data;
    listTodos(todoItemData)
}).catch((error) => console.log(error));
}

getData();
function listTodos(todoItemData){
    for(let i = 0; i < todoItemData.length; i++){
        let iconEdit = document.createElement("img");
        iconEdit.src = "./icon_edit.png";
        let iconDelete = document.createElement("img");
        iconDelete.src = "./icon_delete.png";
        let sessionID = todoItemData[i]._id;
        const todoContainer = document.createElement('div');
        todoContainer.setAttribute("id", sessionID)
        todoContainer.setAttribute("class", "shit")
// title and completion check
        let title = document.createElement('div');
        title.textContent = todoItemData[i].title;
        if (todoItemData[i].completed){
            title.style.textDecoration = "line-through"
        }
        todoContainer.appendChild(title);
// get pic, if there's any
        try {
            if (todoItemData[i].imgUrl.length > 0){
                let imageUrl = document.createElement('img');
                imageUrl.setAttribute("src",todoItemData[i].imgUrl);
                imageUrl.style.width = "114%";
                imageUrl.style.gridColumn = "1/3";
                imageUrl.style.gridRow = "3";
                todoContainer.appendChild(imageUrl);
            }
        } catch (e) {
            console.log()
        }
// description
        let description = document.createElement('div');
        description.textContent = todoItemData[i].description;
        description.style.gridColumn = "1/2";
        description.style.gridRow = "2";
        description.style.fontSize = "0.7em";
        todoContainer.appendChild(description);
// price
        let price = document.createElement('div');
        price.textContent = todoItemData[i].price;
        price.style.gridColumn = "3";
        price.style.gridRow = "2";
        price.style.fontSize = "0.7em";
        todoContainer.appendChild(price);

//icons
        todoContainer.appendChild(iconEdit).className = "iconEdit";
        iconEdit.addEventListener("click",editFunc);

        todoContainer.appendChild(iconDelete).className = "iconDelete";
        iconDelete.addEventListener("click",deleteFunc);

        todoList.appendChild(todoContainer)
    }
}

//   Axios functions   //
// edit function
function editFunc(event){
    event.preventDefault();
    let sessionPath = "https://api.vschool.io/attila/todo/" + event.target.parentNode.id;
    document.getElementById("formInputCompleted").checked = false;
    document.getElementById("formInputTitle").value = "";
    document.getElementById("formInputDescription").value = "";
    document.getElementById("formInputPrice").value = "";
    document.getElementById("formInputPicUrl").value = "";
    console.dir(document.getElementById("submitBtn"))
    // document.getElementById("submitBtn").textContent = "Save";
    openForm();
    axios.get(sessionPath).then(response => {
        const todoItemDataEdit = response.data;
        console.log(todoItemDataEdit);
        document.getElementById("formInputCompleted").checked = todoItemDataEdit.completed;
        document.getElementById("formInputTitle").value = todoItemDataEdit.title;

        if (todoItemDataEdit.description.length > 0){
            document.getElementById("formInputDescription").value = todoItemDataEdit.description;
        }
    // undefined is not a number anyway, skipping over these issues for now
        document.getElementById("formInputPrice").value = todoItemDataEdit.price;
        if (todoItemDataEdit.imgUrl.length > 0){
            document.getElementById("formInputPicUrl").value = todoItemDataEdit.imgUrl;
        }
    }).catch((error) => console.log(error + "Error with fetching data to edit."));

    // document.getElementById("submitBtn").innerText = "Submit";
}

// delete function
function deleteFunc(event) {
    let sessionPath = "https://api.vschool.io/attila/todo/" + event.target.parentNode.id;
    axios.delete(sessionPath).then(response => {todoList.innerHTML = "";
        getData()}).catch(err => console.log("Delete request error"))
}

document.getElementById("open-button").addEventListener("click",openForm);
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

document.getElementById("cancelBtn").addEventListener("click",closeForm);
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// submitting new to-do item
document.getElementById("submitBtn").addEventListener("click",function (e) {
    e.preventDefault();
    const newTodo = {
        completed: document.getElementById("formInputCompleted").checked,
        title: document.getElementById("formInputTitle").value,
        description: document.getElementById("formInputDescription").value,
        price: document.getElementById("formInputPrice").value,
        imgUrl: document.getElementById("formInputPicUrl").value
    };
// reset form
    document.getElementById("formInputCompleted").checked = false;
    document.getElementById("formInputTitle").value = "";
    document.getElementById("formInputDescription").value = "";
    document.getElementById("formInputPrice").value = "";
    document.getElementById("formInputPicUrl").value = "";

    axios.post("https://api.vschool.io/attila/todo/", newTodo).then(response => {
        todoList.innerHTML = "";
        getData()
    }).catch(err => console.log("Post request error"))
});