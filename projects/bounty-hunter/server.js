const express = require ("express");
const app = express();
const port = 6969;

//   Middleware
app.use(express.json())
//

app.get('/', (req, res) => {
    res.send('Hello World\n' + "Use /bounties route for this app")
})

app.use("/bounties", require("./routes/bounties.js"))

// app.get("*", (req, res) => {
//     res.send("No doggie here. But for real, your GET request is messed up. Or it's me, dunno... I'm in server.js")
//     console.log(req.params)
// })

app.listen(port, () => {
    console.log("The server is listening on port " + port)
})