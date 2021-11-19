require("dotenv").config()
const express = require('express')
const cors = require('cors')
const ctrl = require('./controller')
const app = express()
app.use(express.json())
app.use(cors())

app.use(express.static("./public"))

// below code  checks if you are in production or development mode and assigns the according url depending on the mode
// const production  = 'https://traceability-rollbar-test.herokuapp.com';
// const development = 'http://localhost:4004/';
// const url = (process.env.NODE_ENV ? production : development);

app.get('/api/houses', ctrl.getAllHouses)
app.post('/api/houses', ctrl.createHouse)
app.put('/api/houses/:id', ctrl.updateHouse)
app.delete('/api/houses/:id', ctrl.deleteHouse)


const port = process.env.PORT || process.env.SERVER_PORT

app.listen(port, () => console.log(`Server do be running on port: ${port}`))