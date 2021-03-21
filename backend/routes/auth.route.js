const router = require('express').Router()
const User = require('../model/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.post("/signup", async (req, res) => {
    try{
        let { firstName, lastName, email, password, description, role } = req.body

        const repeatUser = await User.findOne({email})
        if(repeatUser){
            throw "user found with same email"
        }

        const saveObj = {
            firstName,
            lastName,
            email,
            password, //: hashedPassword //try commenting me
            description,
            role
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
                message:"successfully registered",
                token
            })
        })
        // res.send(user) //try logging req.body

    }catch (e) {
        res.status(400).json({ message : e || "Registration Failed, try again"})
        console.log(e)
    }
})

router.post("/login", async(req, res) => {
    try{
        let {email, password} = req.body
        // console.log(req.body)
        const user = await User.findOne({email})

        if(!user){
            throw "Invalid Username or Password, try again"
        }

        let isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            throw "Invalid Username or Password, try again"
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

    }catch(e){
        res.status(400).json({ message: e ||"Invalid Username or Password, try again"})
    }
})



module.exports = router

