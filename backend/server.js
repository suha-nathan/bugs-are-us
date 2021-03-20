require('dotenv').config()
const express = require('express')
const app = express()
require('./lib/mongoose.config')
const cors = require('cors')


app.use(express.json())
app.use(cors())


app.use('/user', require('./routes/user.route'))
app.use('/bug', require('./routes/bug.route'))


app.listen(process.env.PORT, () => {
    console.log(`running on ${process.env.PORT}`)
})