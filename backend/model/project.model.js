const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectSchema = new Schema [{
    title: { type: String, required: true},
    description: { type: String, required: true},
    categories: [],
    bugs: [{ type: Schema.Types.ObjectId}],
    members: [{ type: Schema.Types.ObjectId}],
    projectLead: [{ type: Schema.Types.ObjectId}]
}]


module.exports = mongoose.model("Project", projectSchema)