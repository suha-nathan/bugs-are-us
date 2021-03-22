import React, {useEffect, useState} from 'react'
import CommentCard from "./CommentCard";
import {Container} from "react-bootstrap";

const CommentList = ({ bugDetails, loadProjectData, user }) => {

    const [isEditModeOnArray, setIsEditModeOnArray] = useState([])

    return (
        <div>
            {
                bugDetails?.comments?.map((comment, index) => (
                    <CommentCard
                        bugDetails={bugDetails}
                        comment={comment}
                        loadProjectData={loadProjectData}
                        user={user}
                        key={index}
                        index={index}
                        isEditModeOnArray={isEditModeOnArray}
                        setIsEditModeOnArray={setIsEditModeOnArray}
                    />
                ))
            }
        </div>
    )
}

export default CommentList