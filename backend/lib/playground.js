const bcrypt = require('bcrypt')
const saltRounds = 10
const myPlainTextPassword = "123321"


userSchema.pre('save', (next) => {
    const user = this
    bcrypt.hash(myPlainTextPassword, saltRounds).then((hashedPassword)=>{
        console.log(hashedPassword)
        user.password = hashedPassword
    })
})