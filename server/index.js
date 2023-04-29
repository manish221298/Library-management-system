const express = require("express")
const app = express()
const cors = require("cors")
const configureDb = require("./config/database")
const router = require("./config/routes")

const port = 4055
configureDb()


app.use(cors())
app.use(express.json())
app.use("/", router)

// app.get('/', (req, res) => {
//     res.send('Hello, world!');
//   });

app.listen(port, () => {
    console.log("server running on port", port)
});