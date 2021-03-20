const router = require('express').Router()
const User = require('../model/user.model')

router.get("/",async(req,res)=>{
    try{
        console.log(req.user)
        let user = await User.findById(req.user.id)
        res.status(200).json({user})

    }catch(e){
        res.status(400).json({message:"smth went wrong"})
    }
})



module.exports = router