const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectSchema = new Schema ({
    title: { type: String, required: true},
    description: { type: String, required: true},
    categories: { type: String },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    bugs: [{ type: Schema.Types.ObjectId, ref: 'Bug'}],
    members: [{ type: Schema.Types.ObjectId, ref: 'User'}],
    teamLead: { type: Schema.Types.ObjectId, ref: 'User' },
    },
    { timestamps: true}
    )


module.exports = mongoose.model("Project", projectSchema)