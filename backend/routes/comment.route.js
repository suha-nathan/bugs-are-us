const router = require('express').Router()
const Bug = require('../model/bug.model')

router.put('/create/:id', async(req, res) => {
    try{
        console.log(req.body.commentText)
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
        res.status(400).json({ message: "Failed to update comments"})
    }
})

router.put('/edit/:id', async(req, res) => {
    try{
        console.log(req.body.commentText)
        await Bug.findByIdAndUpdate(req.params.id, {
            $set:
                {
                    comments:
                        {
                            commentText: req.body.commentText
                        }
                }
        })
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


//{ $push: { <field1>: <value1>, ... } }