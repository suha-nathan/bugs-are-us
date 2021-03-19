const bcrypt = require('bcrypt')
const saltRounds = 10

const plainTextPassword = 'not_bacon'

// callback functions
// promises
// async - await

// async
const func = async () => {
    const hashedPassword = await bcrypt.hash(plainTextPassword, saltRounds)
    console.log(hashedPassword)
}

func()

// bcrypt.hash(plainTextPassword, saltRounds).then((hashedPassword) => {
//     console.log(hashedPassword)
// })


// schema.pre('save', function(next) {
//     // do stuff
//     next();
// });


userSchema.pre('save',  (next) => {
    const user = this

    bcrypt.hash(plainTextPassword, saltRounds).then((hashedPassword) => {
        //save it

        console.log(hashedPassword)
        user.password = hashedPassword
    })


})


