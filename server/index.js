const express = require('express')
const cors = require('cors')
const ctrl = require('./controller')
const app = express()
app.use(express.json())
app.use(cors())

app.use(express.static("./public"))

app.get('/api/houses', ctrl.getAllHouses)
app.post('/api/houses', ctrl.createHouse)
app.put('/api/houses/:id', ctrl.updateHouse)
app.delete('/api/houses/:id', ctrl.deleteHouse)




app.listen(4004, () => console.log('Server running on 4004'))