const router = require('express').Router()
const User = require('../model/user.model')

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

router.put("/edit", async(req, res) => {
    try{
        const user = await User.findById(req.user.id).exec()

        if(req.body.firstName){
            user.firstName = req.body.firstName
        }
        if(req.body.lastName){
            user.lastName = req.body.lastName
        }
        if(req.body.email){
            user.email = req.body.email
        }
        if(req.body.password){
            user.password = req.body.password
        }
        if(req.body.description){
            user.description = req.body.description
        }
        await user.save()

        res.status(200).json({ message: "User details updated successfully"})
    }catch(e){
        res.status(400).json({ message: "Failed to update user details"})
    }
})

module.exports = router