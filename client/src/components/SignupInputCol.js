import React, {useState} from 'react'
import {Col, Form, Row} from "react-bootstrap";

const SignupInputCol = ({name, placeholder, size, type, isTextarea,values, handleChange,errors,touched}) => {

    // console.log(values[name])
    // if(errors[name]){
    //     console.log(`${name} should show`)
    // }
    // if(touched[name]){
    //     console.log(`${name} is touched`)
    // }
    // console.log(errors[name])
    // console.log(touched[name])
    return (
        <>
            <Col md={size} className="signup-input-col d-flex flex-column justify-content-center position-relative">
                <Form.Control
                    name={name}
                    placeholder={placeholder}
                    type={type}
                    as={isTextarea && "textarea"}
                    rows={3}
                    value={values[name]}
                    // onChange={(e)=>setUserInfo(prevState=>({...prevState, ...{[e.target.name]: e.target.value}}))}
                    onChange={handleChange}
                />

                    {touched[name] && errors[name] ?(
                        <p className="signup-input-col__error-message text-left my-1"> {errors[name]} </p>

                    ) : null
                    }

            </Col>

        </>

    )
}

export default SignupInputCol