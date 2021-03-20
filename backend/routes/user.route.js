const router = require('express').Router()
const User = require('../model/user.model')
const bcrypt = require('bcrypt')

router.post("/signup", async (req, res) => {
    try{
        let { firstName, lastName, email, password, role } = req.body

        const saveObj = {
            firstName,
            lastName,
            email,
            password, //: hashedPassword //try commenting me
            role
        }
        const user = new User(saveObj)

        await user.save()
        res.send(user) //try logging req.body

    }catch (e) {
        res.status(400).json({ message : "Registration Failed, try again"})
        console.log(e)
    }
})

router.post("/login", async(req, res) => {
    try{
        let { email, password } = req.body
        console.log(req.body)
        const user = await User.findOne({email})
        if(user){
            let isMatch = await bcrypt.compare(password, user.password)
            if(isMatch){
                res.status(200).json({ message : "logged in "})
            }
            res.status(400).json({ message : "Invalid Username or Password, try again"})
        }
    }catch(e){
        res.status(400).json({ message: "Invalid Username or Password, try again"})
    }
})


                    // for isaac to view
// router.get("/:id", async(req, res) => {
//     try{
//         console.log(req.params)
//         const singleUser = await User.findById('605589a5aae88404076a6951')
//         res.status(200).json({ singleUser })
//     }catch(e){
//         res.status(400).json({ message: "Didn't get single user"})
//     }
// })

module.exports = router