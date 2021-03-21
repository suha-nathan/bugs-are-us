const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectSchema = new Schema ({
    title: { type: String, required: true},
    description: { type: String, required: true},
    categories: [],
    bugs: [{ type: Schema.Types.ObjectId, ref: 'Bug'}],
    members: [{ type: Schema.Types.ObjectId, ref: 'User'}],
    projectLead: [{ type: Schema.Types.ObjectId, ref: 'User'}]
})


module.exports = mongoose.model("Project", projectSchema)