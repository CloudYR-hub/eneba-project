const express = require('express')
const cors = require('cors')
const pool = require('./db')
const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

app.use('/api/games', require('./routes/games'))

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})