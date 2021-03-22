import React from 'react'
import CommentCard from "./CommentCard";

const CommentList = ({ bugDetails }) => {

    console.log(bugDetails)
    return (
        <div>
            {
                bugDetails?.comments?.map(comment => (
                    <CommentCard comment={comment} />
                ))
            }
        </div>
    )
}

export default CommentList