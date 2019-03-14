const express = require("express");
const app = express ();
const mongoose = require("mongoose")
const morgan = require("morgan")
const port = 7001;

// Middlewares
app.use(express.json());
app.use(morgan("dev"))

// Routes
app.use("/todo", require("./routes/todoRoutes.js"))

// DB Connection
mongoose.connect("mongodb://localhost:27017/first-db", {useNewUrlParser:true}, () => {console.log("[o] Connected to DB")
});

app.listen(port, () => {
    console.log("[+] The server is listening on port " + port)
});