const router = require('express').Router()
const Bug = require('../model/bug.model')

router.post("/create", async(req, res) => {

    try{
        let {
            type,
            title,
            description,
            imgUrl,
            comments: [{user, comment}],
            upVotes,
            priority,
            status
        } = req.body

        const saveBug = {
            type,
            title,
            description,
            imgUrl,
            comments: [{user, comment}],
            upVotes,
            priority,
            status
        }

        const bug = new Bug(saveBug)

        await bug.save()
        res.status(200).json({ message: "Bug added into database"})
    }catch(e){
        res.status(400).json({ message: "Failed to add bug, try again"})
    }
})

router.get("/all", async(req, res) => {
    try{
        const data = await Bug.find()
        res.status(200).json({data})
    }catch(e){
        res.status(400).json({ message: "Failed to view all bugs"})
    }
})

router.get("/:id", async(req, res) => {
    try{
        console.log(req.params)
        const singleData = await Bug.findById('6055aec57ab0a30b4e179727')
        res.status(200).json({singleData})
    }catch(e){
        res.status(400).json({ message: "Failed to view single bug details"})
    }
})

router.post("/delete", async(req, res) => {
    try{
        
    }catch(e){
        res.status(400).json({ message: "Something went wrong"})
    }
})


module.exports = router