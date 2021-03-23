const router = require('express').Router()
const Project = require('../model/project.model')

router.post("/create", async(req, res) => {
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

router.get("/all", async(req, res) => {
    try{
        const data = await Project.find()
            .populate('members')
            .populate('projectLead')
            .populate('bugs')

        res.status(200).json({data})
    }catch(e){
        console.log(e)
        res.status(400).json({ message: "Failed to add project, try again"})
    }
})

router.get("/:id", async(req, res) => {
    try{
        const singleData = await Project.findById(req.params.id)
        res.status(200).json({singleData})
    }catch(e){
        res.status(400).json({ message: "Failed to view single project details"})
    }
})

router.put("/update/:id", async(req, res) => {
    try{
        await Project.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({ message: "Project updated successfully"})
    }catch(e){
        console.log(e)
        res.status(400).json({ message: "Failed to view single project, try again"})
    }
})

router.delete("/delete/:id", async(req, res) => {
    try{
        await Project.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "Project deleted"})
    }catch(e){
        res.status(400).json({ message: "Deleting project failed, try again"})
    }
})
module.exports = router