import React from 'react'
import ProfilePic from "../shared/ProfilePic";
import {Row, Col, Card, Button} from "react-bootstrap"
import axios from 'axios'

const CommentCard = ({ bugDetails, comment }) => {
    async function handleDeleteComment() {
        try {
            await axios.delete(`http://localhost:8080/comment/delete/${bugDetails._id}`, {
                headers: {
                    'x-auth-token': `Bearer ${localStorage.getItem('token')}`
                }
            })
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
                        <p>{comment.commentText}</p>
                    </Col>
                </Row>
                <div className="d-flex justify-content-end">
                    <Button variant="link">Edit</Button>
                    <Button variant="link" className="text-danger" onClick={handleDeleteComment}>Delete</Button>
                </div>
            </Card.Body>


        </Card>
    )
}

export default CommentCard