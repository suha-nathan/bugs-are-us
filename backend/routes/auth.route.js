const router = require('express').Router()
const User = require('../model/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.post("/signup", async (req, res) => {
    try{
        let {firstName, lastName, email, password,description} = req.body
        const saveObj = {
            firstName,
            lastName,
            email,
            password, //: hashedPassword //try commenting me
            description
        }
        const user = new User(saveObj)

        await user.save()

        let payload = {
            user:{
                id:user._id
            }
        }
        jwt.sign(payload,process.env.SECRET,{
            expiresIn: 10000000000000
        },(err,token)=>{
            res.status(201).json({
                message:"successfully registered!!",
                token
            })
        })
        res.send(user) //try logging req.body

    }catch (e) {
        res.status(400).json({ message : "Registration Failed, try again"})
        console.log(e)
    }
})

router.post("/signin", async(req, res) => {
    try{
        let {email, password} = req.body
        // console.log(req.body)
        const user = await User.findOne({email})
        if(user){
            let isMatch = await bcrypt.compare(password, user.password)
            if(!isMatch){
                res.status(400).json({ message : "Invalid Username or Password, try again"})
            }
            // if matched
            let payload = {
                user:{
                    id:user._id
                }
            }
            jwt.sign(payload,process.env.SECRET,{
                expiresIn: 10000000000000000
            },(err,token)=>{
                res.status(200).json({
                    message:"successfully signed in!",
                    token
                })
            })

        }
    }catch(e){
        res.status(400).json({ message: "Invalid Username or Password, try again"})
    }
})



module.exports = router

