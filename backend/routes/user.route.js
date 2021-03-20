const router = require('express').Router()
const User = require('../model/user.model')
const bcrypt = require('bcrypt')

router.post("/signup", async (req, res) => {
    try{
        let {firstName, lastName, email, password} = req.body

        const saveObj = {
            firstName,
            lastName,
            email,
            password //: hashedPassword //try commenting me
        }
        const user = new User(saveObj)

        await user.save()
        res.send(user) //try logging req.body

    }catch (e) {
        res.status(400).json({ message : "Registration Failed, try again"})
        console.log(e)
    }
})

router.post("/signin", async(req, res) => {
    try{
        let {email, password} = req.body
        console.log(req.body)
        const user = await User.findOne({ email})
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



module.exports = router