const router = require('express').Router()
const Bug = require('../model/bug.model')

router.put('/create/:id', async(req, res) => {
    try{

        console.log(Boolean(req.body.commentText))
        if(!req.body.commentText){
            throw "Comment text cannot be empty"
        }
        if(!req.body.commentText.trim()){
            throw "Cannot have blank text"
        }

        await Bug.findByIdAndUpdate(req.params.id, {
                    $push: {
                        comments: {
                            user: req.body.user,
                            commentText: req.body.commentText
                        }
                    }
        })
        res.status(200).json({ message: "Added new comment"})
    }catch(e){
        console.log(e)
        res.status(400).json({ message: e || "Failed to update comments"})
    }
})

router.put('/edit/:id', async(req, res) => {
    try{
        const bug = await Bug.findById(req.params.id).exec()
        const foundIndex = bug.comments.findIndex( comment => comment._id == req.body.commentId)

        bug.comments[foundIndex].commentText = req.body.commentText

        await bug.save()

        res.status(200).json({ message: "Comment edited successfully"})
    }catch(e){
        console.log(e)
        res.status(400).json({ message: "Failed to edit comment"})
    }
})

router.put("/delete/:id", async(req, res) => {
    try{
        console.log(req.body.commentId)
        await Bug.findByIdAndUpdate(req.params.id, {
            $pull: {
                comments: {
                    _id: req.body.commentId
                }
            }
        })
        res.status(200).json({ message: "Comment Deleted"})
    }catch(e){
        console.log(e)
        res.status(400).json({ message: "Deleting comment Failed"})
    }
})

module.exports = router
