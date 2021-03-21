const router = require('express').Router()
const Bug = require('../model/bug.model')

router.put('/update/:id', async(req, res) => {
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

router.put('/update/:id', async(req, res) => {
    try{
        await Bug.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({ message: "Comment edited successfully"})
    }catch(e){
        console.log(e)
        res.status(400).json({ message: "Failed to edit comment"})
    }
})

router.delete("/delete/:id", async(req, res) => {
    try{
        console.log(req.body)
        await Bug.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "Comment Deleted"})
    }catch(e){
        console.log(e)
        res.status(400).json({ message: "Deleting comment Failed"})
    }
})


module.exports = router


//{ $push: { <field1>: <value1>, ... } }