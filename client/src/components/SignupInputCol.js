import React from 'react'
import {Col, Form, Row} from "react-bootstrap";

const SignupInputCol = ({name, placeholder}) => {

    return (
        <Col md={4}>
            <Form.Control name={name} placeholder={placeholder}/>
            <p>Error Message</p>
        </Col>
    )
}

export default SignupInputCol