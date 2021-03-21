const router = require('express').Router()
const User = require('../model/user.model')

router.get("/",async(req,res)=>{
    try{
        let user = await User.findById(req.user.id)
        res.status(200).json({user})

    }catch(e){
        res.status(401).json({message:"smth went wrong"})
    }
})

module.exports = router