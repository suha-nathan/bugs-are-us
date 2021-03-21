import React from 'react'
import ProfilePic from "../shared/ProfilePic";
import {Row, Col, Card, Button} from "react-bootstrap"

const CommentCard = ({ comment }) => {


    return (
        <Card className="my-3">
            <Card.Body>
                <Row>
                    <Col md={2} className="d-flex justify-content-center align-items-center">
                        <ProfilePic size={6.5}/>
                    </Col>

                    <Col className="text-left">
                        <h5>{comment?.user}</h5>
                        <p>{comment?.commentText}</p>
                    </Col>
                </Row>
                <div className="d-flex justify-content-end">
                    <Button variant="link">Edit</Button>
                    <Button variant="link" className="text-danger">Delete</Button>
                </div>
            </Card.Body>


        </Card>
    )
}

export default CommentCard