const express = require("express")
const todoRouter = express.Router()
const Todo = require("../models/todo.js")

const fakeDB = [{}]

// GET ALL
todoRouter.get("/", (req, res) => {
    Todo.find((err, todos) => {
        // Always handle DB errors first
        if (err){
          res.status(500)
          return res.send(err)  
        }
        // Send back response
        return res.status(200).send(todos)
    })
})

// POST Add one
todoRouter.post("/", (req, res) => {
    // create new to-do object using our schema
    const newTodo = new Todo(req.body)
    // send that object to the DB to be saved
    newTodo.save((err, newTodoObj) => {
        if (err) {
            res.status(500)
            return res.send(err)
        }
        return res.status(201).send(newTodoObj)
    })
})

// GET One
todoRouter.get("/:id", (req, res) => {
    Todo.findOne({_id: req.params._id}, (err, foundTodo) => {
        if (err){
            res.status(500)
            return res.send(err)
        }
        return res.status(200).send(foundTodo)
    })
})

// DELETE
todoRouter.delete("/:_id", (req, res) => {
    Todo.findOneAndRemove({_id: req.params._id}, (err, deletedTodo) => {
        if (err) {
            res.status(500)
            return res.send(err)
        }
        return res.status(202).send(`Successfully deleted item w/ ID ${req.params._id} and title ${deletedTodo.title}`)
    })
})

//PUT - Update one
todoRouter.put("/:_id", (req, res) => {
    Todo.findOneAndUpdate(
        {_id:req.params._id},   //Find the to-do
        req.body,               //Update it /w this obj
        {new:true},             // send new one, not old one
        (err, updatedTodo) => {
            if (err){
                res.status(500)
                return res.send(err)
            }
            return res.status(201).send(updatedTodo)
        })
})

module.exports = todoRouter