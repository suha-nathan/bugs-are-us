require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
}).then(() => {
    console.log('mongodb connected')
}).catch(e => {
    console.log(e)
})

module.exports = mongoose