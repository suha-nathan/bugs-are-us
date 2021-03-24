const router = require('express').Router()
const Bug = require('../model/bug.model')

router.put('/edit/:id', async(req, res) => {
    try{
        const upVote = await Bug.findById(req.params.id).exec()
        const foundUpvote = upVote.upVotes.findIndex( upvote => upvote._id == req.body.)

        // console.log(req.body)
        res.status(200).json({ message: "Upvote succeeded"})
    }catch(e){
        res.status(400).json({ message: "Upvote failed"})
    }
})



module.exports = router