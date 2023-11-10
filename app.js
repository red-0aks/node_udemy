require('dotenv').config()
const express = require('express')
const cors = require('cors')
const dbConnect = require('./config/mongo')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('storage'))

const port = process.env.PORT||3000
const tracksRouter = require('./routes')

/**
 * Aqui se invoca a las rutas
 */

app.use('/api', tracksRouter)

app.listen(port, () => {
   console.log(`Tu app esta lista en http://localhost:${port}`)
})

dbConnect()