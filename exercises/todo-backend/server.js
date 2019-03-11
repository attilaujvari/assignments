const express = require ("express")
const app = express()
const uuid = require("uuid/v4")

let todos = [
    {
        "name"        : "testName",
        "description" : "testDescription",
        "imgUrl"      : "https://i.gifer.com/RGtK.gif",
        "isComplete"  : false,
        "_id"         : uuid()
    }
]
app.use(express.json())

app.get("/", (req,res) => {
    res.send("Complete URL with 'api/v1/*' ")
})

app.get("/api/v1/todos", (req, res) =>{
    res.send(todos)
})

app.get("/api/v1/todos/:_id", (req, res) => {
    const ID = req.params._id
    const foundTodo = todos.find(todo => todo._id === ID)
    res.send(foundTodo)
})

app.post("/api/v1/todos", (req, res) => {
    // Add ID to the request body
    req.body._id = uuid()
    // Add it to database
    todos.push(req.body)
    // sending back updated object
    res.send(req.body)
})

app.delete("/api/v1/todos/:_id", (req, res) => {
    todos = todos.filter(todo => todo._id !== req.params._id)
    res.send(todos)
})

app.put("/api/v1/todos/:_id", (req, res) => {
    // use the ID to find object
    const foundTodo = todos.find(todo => todo._id === req.params._id)
    // update object
    Object.assign(foundTodo, req.body)

    res.send(foundTodo)
})





app.listen(3221, () => {
    console.log("server listening on 3221")
})