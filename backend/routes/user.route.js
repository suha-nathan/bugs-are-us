const router = require('express').Router()
const User = require('../model/user.model')

const cloudinary = require('../lib/cloudinary.config')
const multer = require("multer")
const storage = require("../lib/multerStorage.config")

const upload = multer({ storage })

router.get("/", async(req, res)=>{
    try{
        let user = await User.findById(req.user.id)
        res.status(200).json({user})
    }catch(e){
        res.status(401).json({message:"smth went wrong"})
    }
})

router.get("/all", async(req, res) => {
    try{
        let data = await User.find()
            .populate('projects')
            .populate('bugs')

        res.status(200).json({data})
    }catch(e){
        res.status(400).json({ message: "Couldn't retrieve all users"})
    }
})

router.delete("/delete/:id", async(req, res) => {
    try{
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "User Deleted"})
    }catch(e){
        res.status(400).json({ message: "Failed to delete user"})
    }
})

router.put("/edit", upload.single("file") ,async(req, res) => {
    try{

        const user = await User.findById(req.user.id).exec()

        // console.log("prev user is",user)
        // console.log("body is",req.body)
        // console.log("file is",req.file.path)
        console.log("before if statement")
        if(req.body.firstName){
            // console.log("if statement")
            user.firstName = req.body.firstName
        }
        if(req.body.lastName){
            user.lastName = req.body.lastName
        }

        if(req.body.password){
            user.password = req.body.password
        }
        if(req.body.description){
            user.description = req.body.description
        }
        // console.log("got here")
        const foundInDatabase = await User.findOne({ email: req.body.email})

        // console.log("finding",foundInDatabase)

        // 3 different scenarios
        // email never change,
        // email change, but email already in database
        // email change, email not in database

        // found in database but not own email
        if(user.email !== foundInDatabase.email) {
            throw "Email exists in database"
        }
        if(!foundInDatabase) {
            // console.log('got here')
            user.email = req.body.email
        }

        if(req.file){
            console.log("in if statement")
            const imagePath = req.file.path
            console.log(imagePath)
            const uniqueFilename = new Date().toISOString()
            console.log(uniqueFilename)
            const uploadResponse = await cloudinary.uploader.upload(imagePath, {
                public_id: `bugs/${uniqueFilename}`,
                tags: "bugs"
            }, (err, result)=> {
                console.log(err,result)
                console.log("trying to upload to cloud")
                if(err){
                    console.log("theres an error")
                    return res.status(400).json({message: "error uploading file" })
                }
                console.log("midst of uploading")
                const fs = require("fs")
                fs.unlinkSync(imagePath)
                user.profilePicture = result.url
            })
            // console.log("cloudinary upload",uploadResponse)
        }

        // console.log("new user is", user)

        await user.save()

        res.status(200).json({ message: "User details updated successfully"})
    }catch(e){
        res.status(400).json({ message: e || "Failed to update user details"})
    }
})

module.exports = router