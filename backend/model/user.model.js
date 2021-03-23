const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const saltRounds = 10



const userSchema = new Schema({
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true },
    description: { type: String },
    projects: [{ type: Schema.Types.ObjectId, ref: 'Project'}],
    bugs: [{ type: Schema.Types.ObjectId, ref: 'Bug'}],
    profilePicture:{
        imageName: {
            type: String,
            default: "none",
            required: true
        },
        imageData: {
            type: String,
            required: true
        }},
    role: {
        type: String,
        enum: ["user", "teamLead"]
    }},
    { timestamps: true}
)

userSchema.pre('save', function (next){

    const user = this

    if(!this.isModified('password')){
        return next()
    }

    bcrypt.hash(user.password, saltRounds).then((hashedPassword) => {
        user.password = hashedPassword
        next()
    })
})

module.exports = mongoose.model("User", userSchema)