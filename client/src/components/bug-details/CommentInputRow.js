import React from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap'

const CommentInputRow = (props) => {

    return (
        <Row>
            <Col md={10}>
                <Form.Control name="comment" placeholder="Say something"/>
            </Col>
            <Col md={2} className="mx-0">
                <Button>Comment</Button>
            </Col>

        </Row>
    )
}

export default CommentInputRow