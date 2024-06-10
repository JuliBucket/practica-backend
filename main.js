const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()


//middlewares
app.use(cors())
app.use(morgan())
app.use(express.json())


//routes
app.use(require('./src/routes/books.routes'))
app.use(require('./src/routes/books.routes'))
app.use(require('./src/routes/books.routes'))

app.listen(4000)
console.log("servidor iniciado")