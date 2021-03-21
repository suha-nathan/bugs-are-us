const router = require('express').Router()
const Project = require('../model/project.model')

router.post('/create', async(req, res) => {
    try{
        let { title, description, categories, bugs, members, projectLead } = req.body
        console.log(req.body)

        const saveProject = {
            title,
            description,
            categories,
            bugs,
            members,
            projectLead
        }

        const project = new Project(saveProject)
        await project.save()
        res.status(200).json({ message: "Project added into database"})
    }catch(e){
        console.log(e)
        res.status(400).json({ message : "Failed to add project"})
    }
})




module.exports = router