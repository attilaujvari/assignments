#Server setup in order of setup steps
npm init -y
npm i express morgan mongoose

create .gitignore and add node_modules

server.js
    / routes
    / models
    
### server.js
const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 6969

// listen
app.listen(PORT, () => {
    console.log(`[+] Server is running on port ${PORT}`)
})

// Middlewares
app.use(express.json())
app.use(morgan(`dev`))

// DB connection
mongoose.connect("mongodb://localhost:27017/happiest-hours", {useNewUrlParser: true}, () => {
    console.log(`[o] Connected to the DB`)
})

//Routes

### location.js `in models` to route stuff
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const locationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    drinkImg: {
        type: String,
        required: true
    },
    startTime: Number,
    endTime: Number,
    drinks: [String],
    isDiveBar: Boolean
})

module.exports = mongoose.model("Location", locationSchema)

#### Back to server routes
//Routes
app.use("/happyhour", require(`.routes/locationRoutes.js`))

#### to routes and create the above referenced route
### locationRoutes.js
const express = require ("express")
const locationRouter = express.Router()
const location = require ("../models/location.js")

module.exports = locationRouter

// GET All
locationRouter.get("/", (req, res, next) => {
    location.find((err, locations) => {   
    //either err or data comes back, the other will be null
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(locations)
    })
})

//POST
locationRouter.get("/", (req, res, next => {
    const newLocation = new Location(req,body)
    newLocation.save(err, savedLocation) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedLocation)
    })
})

#### Now test things w/ Postman

If there's user authentication, this is the time to implement unique error throwing in `server.js` by adding a global error handler

### server.js
//Global error handler
app.use((err, req, res, next) =>{
    console.error(err)
    return res.send({errMsg: err.message})
})

#### Custom error message, if needed (user auth, for example)
return next(new Error("Custom error message"))