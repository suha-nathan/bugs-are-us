// require('dotenv').config()
// const router = require('express').Router()
// const userModel = require('../model/user.model')
// const bcrypt = require('bcrypt')
// const jsonWebToken = require('jsonwebtoken')
//
// router.post('signup', async(req, res) => {
//     try{
//         let {email, password} = res.body
//         let hashPassword = await bcrypt.hash(password, 10)
//         let user = new userModel ({ email, password : hashPassword })
//
//         await user.save()
//
//         let payload = {
//             user: {
//                 id: user._id
//             }
//         }
//
//         jsonWebToken.sign
//
//
//     }catch(e){
//         return res.status(400).json({ message: "You do no have access to this"})
//     }
//
// })
//
// module.exports = router