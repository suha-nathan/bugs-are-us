import React, {useState} from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap'
import axios from "axios";

const CommentInputRow = ({ bugDetails, user, loadProjectData, isEditModeOnArray, setIsEditModeOnArray }) => {

    const [commentText, setCommentText] = useState('')

    async function handleAddComment() {
        console.log('in', commentText)
        await axios.put(`http://localhost:8080/comment/create/${bugDetails._id}`, { user: user._id, commentText }, {
            headers: {
                'x-auth-token': `Bearer ${localStorage.getItem('token')}`
            }
        })
        setIsEditModeOnArray(bugDetails.comments.map(() => false))
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
                />
            </Col>
            <Col md={2} className="mx-0">
                <Button onClick={handleAddComment}>Comment</Button>
            </Col>

        </Row>
    )
}

export default CommentInputRow