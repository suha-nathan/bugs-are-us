import React from 'react'
import {Col, Form, Row} from "react-bootstrap";

const EditAccountInputCol = ({name, placeholder, size, type, isTextarea, handleChange, values, errors, touched}) => {

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

export default EditAccountInputCol