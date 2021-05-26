const express = require('express')
const app = express()
const { port } = require("./config/variables")

app.use(require('cors')())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Routes
app.use('/reports', require('./routes/reports'))
app.use('/portfolio', require('./routes/portfolio'))

app.listen(port, () => {
  console.log(`Server start in the http://localhost:${port}`)
})