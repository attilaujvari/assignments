const express = require('express');
const app = express();
const uuid = require("uuid/v4");

let people = [
    {
        name: "Rick",
        age: 70,
        _id: uuid()
    },
    {
        name: "Morty",
        age: 13,
        _id: uuid()
    },
    {
        name: "Birdman",
        age: "unknown",
        _id: uuid()
    }
];

//          ----------          ----------//
//   Middleware
app.use(express.json())


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get("/people", (req, res) => {
    res.send(people)
})

app.get("/people/:_id", (req, res) => {
    const ID = req.params._id
    const foundPerson = people.find(person => person._id === ID)
    res.send(foundPerson)
})

app.post("/people", (req, res) => {
    // Add ID to the request body
    req.body._id = uuid()
    // Add it to database
    people.push(req.body)
    // sending back updated object
    res.send(req.body)
})

app.delete("/people/:_id", (req, res) => {
    const updatedPeople = people.filter(person => person._id !== req.params._id)
    people = updatedPeople
    res.send(people)
})

app.put("/people/:_id", (req, res) => {
    // use the ID to find object
    const foundPerson = people.find(person => person._id === req.params._id)
    // update object
    Object.assign(foundPerson, req.body)

    res.send(foundPerson)
})

const port = 5800;
app.listen(port, () => {
    console.log("Server is running on port " + port)
})