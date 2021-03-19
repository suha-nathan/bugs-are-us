const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const saltRounds = 10
const myPlainTextPassword = "123321"


const userSchema = new Schema({
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true },
    projects: [{ type: Schema.Types.ObjectId}],
    bugs: [{ type: Schema.Types.ObjectId}]
})

// userSchema.pre('save', (next) => {
//     const user = this
//     bcrypt.hash(myPlainTextPassword, saltRounds).then((hashedPassword)=>{
//         console.log(hashedPassword)
//         user.password = hashedPassword
//     })
// })

module.exports = mongoose.model("User", userSchema)