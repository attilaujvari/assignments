const mongoose = require("mongoose")
const Schema = mongoose.Schema

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
        // common options: unique, lowercase, default
    },
    description: String,
    isCompleted: {
        type: Boolean,
        default: false
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    department:{
        type: String,
        enum: ["Clothing","Men"]
    }
})

// Arguments below:
//   1. String representation of what this collection will be called
//   2. Schema attached to the collection
module.exports = mongoose.model("Todo", todoSchema)