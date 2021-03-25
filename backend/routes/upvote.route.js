const router = require('express').Router()
const Bug = require('../model/bug.model')


router.put('/update/:id', async(req, res) => {
    try{
        const bug = await Bug.findById(req.params.id).exec()

        if(bug.upVotes.includes(req.body.userId)){
            throw "You have already Upvoted"
        }
        bug.upVotes.push(req.body.userId)
        console.log(bug.upVotes)

        await bug.save()

        res.status(200).json({ message: "Upvote succeeded"})
    }catch(e){
        res.status(400).json({ message: e || "Upvote failed"})
    }
})



module.exports = router