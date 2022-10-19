const express = require('express')
const listRoutes = require('./routes/list')

const app = express()
app.use(express.json())

app.use("/list", listRoutes)

app.listen(3002)