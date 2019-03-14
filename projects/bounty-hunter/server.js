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

app.listen(port, () => {
    console.log("The server is listening on port " + port)
})