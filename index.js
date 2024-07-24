const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
require('./src/utils/modelsSync') // database models sync
const PORT = 4000

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Welcome to the Healthcare Mangement System'))
app.use('/api', require('./src/routes/api'))

app.listen(PORT, () => console.log('Server started'))
