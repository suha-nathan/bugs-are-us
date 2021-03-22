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

router.delete("/delete/:id", async(req, res) => {
    try{
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "User Deleted"})
    }catch(e){
        res.status(400).json({ message: "Failed to delete user"})
    }
})

router.put("/update/:id", async(req, res) => {
    try{
        //Add user.save(req.body)?
        console.log(req.user.id)
        await User.findById(req.user.id)

        User.update({
            password: req.user.password
            },
            {
                $set:
                    {
                    "hashedPassword": req.body.password
                }
        })
        await password.save()



        res.status(200).json({ message: "User details updated successfully"})
    }catch(e){
        res.status(400).json({ message: "Failed to update user details"})
    }
})

module.exports = router