import React, {useRef, useState} from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap'
import axios from "axios";

const CommentInputRow = ({ bugDetails, user, loadProjectData, isEditModeOnArray, setIsEditModeOnArray }) => {

    const [commentText, setCommentText] = useState('')
    const commentTextarea = useRef(null)

    async function handleAddComment() {
        console.log('in', commentText)
        await axios.put(`http://localhost:8080/comment/create/${bugDetails._id}`, { user: user._id, commentText }, {
            headers: {
                'x-auth-token': `Bearer ${localStorage.getItem('token')}`
            }
        })
        setIsEditModeOnArray(bugDetails.comments.map(() => false))
        setCommentText('')
        commentTextarea.current.value = ''
        console.log(isEditModeOnArray)
        loadProjectData()
    }

    console.log(bugDetails)
    return (
        <Row>
            <Col md={10}>
                <Form.Control
                    name="comment"
                    placeholder="Say something"
                    onChange={(e) => setCommentText(e.target.value)}
                    as="textarea"
                    rows={3}
                    ref={commentTextarea}
                />
            </Col>
            <Col md={2} className="mx-0 d-flex justify-content-center align-items-center">
                <Button onClick={handleAddComment}>Comment</Button>
            </Col>

        </Row>
    )
}

export default CommentInputRow