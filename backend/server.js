require('dotenv').config()
const express = require('express')
const app = express()
require('./lib/mongoose.config')
const cors = require('cors')
const bodyParser = require('body-parser')
const authChecker = require('./lib/authChecker')

// app.use(express.json({limit: '50mb'}));
// app.use(express.urlencoded({limit: '50mb', extended: true}));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


app.use('/auth', require('./routes/auth.route'))
app.use('/user', authChecker, require('./routes/user.route'))
app.use('/bug',authChecker, require('./routes/bug.route'))
app.use('/project' ,authChecker, require('./routes/project.route'))
app.use('/comment', authChecker, require('./routes/comment.route'))
app.use('/upvote', authChecker, require('./routes/upvote.route'))


app.listen(process.env.PORT, () => {
    console.log(`running on ${process.env.PORT}`)
})