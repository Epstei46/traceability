require("dotenv").config()
const express = require('express')
const cors = require('cors')
const ctrl = require('./controller')
const app = express()
app.use(express.json())
app.use(cors())

app.use(express.static("./public"))
app.get("/", (req, res) => {
    res.sendFile("index.html")
})

app.get('/api/houses', ctrl.getAllHouses)
app.post('/api/houses', ctrl.createHouse)
app.put('/api/houses/:id', ctrl.updateHouse)
app.delete('/api/houses/:id', ctrl.deleteHouse)


const port = process.env.PORT || process.env.SERVER_PORT

app.listen(port, () => console.log(`Server do be running on port: ${port}`))