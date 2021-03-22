import React, {useState} from 'react'
import ProfilePic from "../shared/ProfilePic";
import { Row, Col, Card, Button, Form } from "react-bootstrap"
import axios from 'axios'

const CommentCard = ({ bugDetails, comment, loadProjectData }) => {
    console.log(bugDetails)

    const [isEditMode, setIsEditMode] = useState(false)
    const [editedComment, setEditedComment] = useState('')

    function handleToggleEditMode() {
        setEditedComment(comment.commentText)
        setIsEditMode(prevState => !prevState)
    }

    function handleEditComment(e) {
        setEditedComment(e.target.value)
        console.log(e.target.value)
    }

    async function handleConfirmEditComment() {
        try {
            await axios.put(`http://localhost:8080/comment/edit/${bugDetails._id}`,
                { commentId: comment._id, commentText: editedComment},
                {
                    headers: {
                        'x-auth-token': `Bearer ${localStorage.getItem('token')}`
                    }
                })

            setEditedComment('')
            setIsEditMode(false)
            loadProjectData()
        } catch (e) {
            console.log(e)
        }

    }

    async function handleDeleteComment() {
        try {
            await axios.put(`http://localhost:8080/comment/delete/${bugDetails._id}`,{ commentId: comment._id}, {
                headers: {
                    'x-auth-token': `Bearer ${localStorage.getItem('token')}`
                }
            })
            loadProjectData()
        } catch (e) {
            console.log(e)
        }

    }

    return (
        <Card className="my-3">
            <Card.Body>
                <Row>
                    <Col md={2} className="d-flex justify-content-center align-items-center">
                        <ProfilePic size={6.5}/>
                    </Col>

                    <Col className="text-left">
                        <h5>{comment.user}</h5>
                        {
                            isEditMode
                            ?
                            <Form.Control as="textarea" rows={3} value={editedComment} onChange={handleEditComment}/>
                            :
                            <p>{comment.commentText}</p>
                        }

                    </Col>
                </Row>
                <div className="d-flex justify-content-end">
                    {
                        isEditMode
                        ?
                        <>
                            <Button variant="primary" onClick={handleConfirmEditComment}>Confirm</Button>
                            <Button variant="danger"  onClick={handleToggleEditMode}>Cancel</Button>
                        </>
                        :
                        <>
                            <Button variant="link" onClick={handleToggleEditMode}>Edit</Button>
                            <Button variant="link" className="text-danger" onClick={handleDeleteComment}>Delete</Button>
                        </>


                    }

                </div>
            </Card.Body>


        </Card>
    )
}

export default CommentCard