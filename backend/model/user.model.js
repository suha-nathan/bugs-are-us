const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const saltRounds = 10

const userSchema = new Schema({
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true },
    projects: [{ type: Schema.Types.ObjectId, ref: 'Project'}],
    bugs: [{ type: Schema.Types.ObjectId, ref: 'Bug'}],
    role: { type: String, enum: ["user", "teamLead"]}
})

userSchema.pre('save', function (next){
    const user = this
    // console.log(this.isModified('password'))
    // console.log(this)
    if(this.isModified('password')){
        bcrypt.hash(user.password, saltRounds).then((hashedPassword) => {
            // console.log(hashedPassword)
            user.password = hashedPassword
            next()
        })
    }
})

module.exports = mongoose.model("User", userSchema)