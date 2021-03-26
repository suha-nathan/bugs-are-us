require('dotenv').config()
const router = require('express').Router()
const User = require('../model/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const cloudinary = require('../lib/cloudinary.config')
const multer = require("multer")
const storage = require('../lib/multerStorage.config')

const upload = multer({
    storage:storage
})

router.post("/signup", upload.single("file"),async (req, res) => {
    try{
        let {  firstName, lastName, email, password, description, role } = req.body

        const repeatUser = await User.findOne({email})
        if(repeatUser){
            throw "user found with same email"
        }

        const saveObj = {
            profilePicture:"",
            firstName,
            lastName,
            email,
            password, //: hashedPassword //try commenting me
            description,
            role
        }

        console.log("request file is",req.file)
        // console.log(req.body)
        if(req.file){
            // check for req.file.mimetype to be image: 'image/jpeg' 'image/png',
            const imagePath = req.file.path
            const uniqueFilename = new Date().toISOString()
            const uploadResponse = await cloudinary.uploader.upload(imagePath, {
                public_id: `${process.env.CLOUD_FILE}/${uniqueFilename}`
            }, (err, result) => {
                if (err){
                    return res.send(err)
                }
                // console.log("file uploaded to cloudinary")
                //remove file from server
                const fs = require('fs')
                fs.unlinkSync(imagePath)
                saveObj.profilePicture = result.url
            })
            // console.log(uploadResponse)
        }

        const newUser = new User(saveObj)
        console.log(newUser)
        await newUser.save()

        let payload = {
            user:{
                id: newUser._id
            }
        }
        jwt.sign(payload,process.env.SECRET,{
            expiresIn: 10000000000000
        },(err,token)=>{
            res.status(201).json({
                message:"successfully registered",
                user: newUser,
                token
            })
        })

    }catch (e) {
        res.status(400).json({ message : e || "Registration Failed, try again"})
        console.log(e)
    }
})

router.post("/login", async(req, res) => {
    try{
        let {email, password} = req.body
        // console.log(req.body)
        const foundUser = await User.findOne({email})

        if(!foundUser){
            throw "Invalid Username or Password, try again"
        }

        let isMatch = await bcrypt.compare(password, foundUser.password)
        console.log(isMatch)
        if(!isMatch){
            throw "Invalid Username or Password, try again"
        }
        // if matched

        let payload = {
            user:{
                id:foundUser._id
            }
        }
        jwt.sign(payload,process.env.SECRET,{
            expiresIn: 10000000000000000
        },(err,token)=>{
            res.status(200).json({
                message:"successfully signed in!",
                user:foundUser,
                token
            })
        })

    }catch(e){
        res.status(400).json({ message: e ||"Invalid Username or Password, try again"})
    }
})



module.exports = router

