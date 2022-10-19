const express = require('express')
const detailRoutes = require('./routes/detail')

const app = express()
app.use(express.json())

app.use("/detail", detailRoutes)

app.listen(3000)