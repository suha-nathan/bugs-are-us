const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bugSchema = new Schema({
        type: { type: String, required: true},
        title: { type: String, required: true},
        description: String,
        imgUrl: String,
        comments: [
            {
                user: { type: Schema.Types.ObjectId, ref: 'User'},
                commentText: { type: String}
            }
        ],
        upVotes: [],
        priority: { type: String, required: true},
        status: { type: String, required: true}
    }, { timestamps: true })

module.exports = mongoose.model("Bug", bugSchema)
