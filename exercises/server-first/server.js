const express = require("express");
const app = express();
const uuid = require("uuid/v4");

const people = [
    {
        name: "Rick",
        age: 70,
        _id: uuid()
    }
]

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get("/people"), (req, res) => {
    res.send(people)
}


app.listen(3000)