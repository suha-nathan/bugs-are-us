const router = require('express').Router()
const Bug = require('../model/bug.model')
const userMockData = require('../lib/userMockData')

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

router.get("/allbugs", async(req, res) => {
    try{
        let mockUserData = {userMockData}.map(() => {
            console.log(mockUserData)
        })
    }catch(e){
        res.status(400).json({ message: "Failed to view all bugs"})
    }
})

module.exports = router