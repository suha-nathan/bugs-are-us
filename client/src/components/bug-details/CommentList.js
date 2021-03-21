import React from 'react'
import CommentCard from "./CommentCard";

const CommentList = ({ comments }) => {

    console.log(comments)
    return (
        <div>
            {
                comments?.map(comment => (
                    <CommentCard comment={comment} />
                ))
            }
        </div>
    )
}

export default CommentList