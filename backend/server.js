require('dotenv').config()
const express = require('express')
const app = express()
require('./lib/mongoose.config')
const cors = require('cors')
const authChecker = require('./lib/authChecker')

app.use(express.json())
app.use(cors())


app.use('/auth', require('./routes/auth.route'))
app.use('/user', authChecker, require('./routes/user.route'))
app.use('/bug',authChecker, require('./routes/bug.route'))


app.listen(process.env.PORT, () => {
    console.log(`running on ${process.env.PORT}`)
})