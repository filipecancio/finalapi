const express = require('express')
const gameRoutes = require('./routes/game')

const app = express()
app.use(express.json())

app.use("/game", gameRoutes)

app.listen(3001)