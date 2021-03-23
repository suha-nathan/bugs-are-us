import React, {useEffect, useState} from 'react'
import ProfilePic from "../shared/ProfilePic";
import { Row, Col, Card, Button, Form } from "react-bootstrap"
import axios from 'axios'

const CommentCard = ({ bugDetails, comment, loadProjectData, user, index, isEditModeOnArray, setIsEditModeOnArray }) => {

    const [editedComment, setEditedComment] = useState('')

    useEffect(() => {
        setIsEditModeOnArray(bugDetails?.comments?.map(() => false))
    }, [])


    function handleToggleEditMode(index) {
        setEditedComment(comment.commentText)
        setIsEditModeOnArray(prevState => {
            const newFlippedArray = prevState.map(() => false)
            newFlippedArray[index] = !prevState[index]
            return newFlippedArray
        })
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
            setIsEditModeOnArray(prevState => prevState.map(() => false))
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
        <Card className="my-3 font-open-sans">
            <Card.Body>
                <Row>
                    <Col md={2} className="d-flex justify-content-center align-items-center">
                        <ProfilePic size={6.5}/>
                    </Col>

                    <Col className="text-left d-flex flex-column">
                        <h5>{comment.user.firstName} {comment.user.lastName}</h5>
                        {
                            isEditModeOnArray.length && isEditModeOnArray[index]
                            ?
                            <Form.Control as="textarea" rows={3} value={editedComment} onChange={handleEditComment} />
                            :
                            <p>{comment.commentText}</p>
                        }

                        {
                            user._id === comment.user
                            &&
                            <div className="d-flex justify-content-end">
                                {
                                    isEditModeOnArray.length && isEditModeOnArray[index]
                                        ?
                                        <>
                                            <Button variant="danger"  onClick={() => handleToggleEditMode(index)}>Cancel</Button>
                                            <Button variant="primary" onClick={handleConfirmEditComment}>Confirm</Button>

                                        </>
                                        :
                                        <>
                                            <Button variant="link" onClick={() => handleToggleEditMode(index)}>Edit</Button>
                                            <Button variant="link" className="text-danger" onClick={handleDeleteComment}>Delete</Button>
                                        </>


                                }
                            </div>
                        }

                    </Col>
                </Row>



            </Card.Body>


        </Card>
    )
}

export default CommentCard