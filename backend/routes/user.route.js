const router = require('express').Router()
const User = require('../model/user.model')

router.post("/signup", async (req, res) => {
    try{
        let {firstName, lastName, email, password} = req.body
        console.log(req.body)
        const saveObj = {
            firstName,
            lastName,
            email,
            password //try commenting me
        }
        const user = new User(saveObj)
        await user.save()
        res.send(user) //try logging req.body
    }catch (e) {
        res.status(400).json({ message : "Registration Failed, try again"})
        console.log(e)
    }
})


router.get("/test", async (req, res) => {
    try{
        res.send('hello from test')
    }catch (e) {
        res.status(400).json({ message : "Registration Failed, try again"})
        console.log(e)
    }
})




module.exports = router