import React, {useState} from 'react'
import {Col, Form, Row} from "react-bootstrap";

const SignupInputCol = ({name, placeholder, size, isTextarea,setUserInfo}) => {

    return (
        <>
            <Col md={size} className="signup-input-col d-flex flex-column justify-content-center position-relative">
                <Form.Control
                    name={name}
                    placeholder={placeholder}
                    onChange={(e)=>setUserInfo(prevState=>({...prevState, ...{[e.target.name]: e.target.value}}))}
                    as={isTextarea && "textarea"}
                    rows={3}/>
                <p className="signup-input-col__error-message text-left my-1">Error Message</p>
            </Col>

        </>

    )
}

export default SignupInputCol