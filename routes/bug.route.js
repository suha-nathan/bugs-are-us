const router = require('express').Router()
const Bug = require('../model/bug.model')
// const userMockData = require('../lib/userMockData')
// const authChecker = require('../lib/authChecker')

router.post("/create",async(req, res) => {

    try{
        let {
            type,
            title,
            priority,
            status,
            description,
            user
        } = req.body

        const saveBug = {
            type,
            title,
            priority,
            status,
            description,
            user
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
        console.log('working')
        const data = await Bug.find()
            .populate('upVotes')
            .populate('user')
            .populate('projects')
            .populate({ path: 'comments', populate: { path: 'user'}})
        res.status(200).json({data})

    }catch(e){
        res.status(400).json({ message: "Failed to view all bugs"})
    }
})

router.get("/:id", async(req, res) => {
    try{
        console.log(req.params)
        const singleData = await Bug.findById(req.params.id).populate('comments.user').exec()
        res.status(200).json({singleData})
    }catch(e){
        res.status(400).json({ message: "Failed to view single bug details"})
    }
})

router.delete("/delete/:id", async(req, res) => {
    try{
        await Bug.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "Bug deleted"})
    }catch(e){
        res.status(400).json({ message: "Deleting bug failed, try again"})
    }
})

//for comments later, use $push(array)
router.put("/update/:id", async(req, res) => {
    try{
        console.log(req.body)
        await Bug.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({ message: "Bug updated successfully"})
    }
    catch(e){
        console.log(e)
        res.status(400).json({ message: "Couldn't update details"})
    }
})

module.exports = router