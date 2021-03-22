import React from 'react'
import CommentCard from "./CommentCard";

const CommentList = ({ bugDetails, loadProjectData }) => {

    console.log(bugDetails)
    return (
        <div>
            {
                bugDetails?.comments?.map(comment => (
                    <CommentCard
                        bugDetails={bugDetails}
                        comment={comment}
                        loadProjectData={loadProjectData}
                    />
                ))
            }
        </div>
    )
}

export default CommentList