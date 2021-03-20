import React from 'react'
import TempHeader from "./TempHeader";
import {Button, CardImg, Col, Container, Dropdown, DropdownButton, Form, Image, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import SignupInputCol from "./SignupInputCol";
import DropdownItem from "react-bootstrap/DropdownItem";

const SignupPage = (props) => {

    // const signupFields = [{
    //     name: 'firstName',
    //     placeholder: 'First Name',
    //     errorMessage: 'Plea'
    // }'lastName', 'email', 'password', 'confirmPassword']
    return (
        <div className="signup-page-container">
            <TempHeader />

            <Container className="d-flex flex-column justify-content-center align-items-center vh-100 ">
                <h1 className="my-0 ">Bugs R Us</h1>

                <div className="position-relative signup-page-container__content w-100 h-75">
                    <Row className="h-75 ">

                        <Col>
                            <Row className="d-flex justify-content-between align-items-center px-5 h-100">
                                <Image src="https://www.placehold.it/150x150" className="rounded-circle"></Image>
                                <Button className="bg-success">Upload</Button>
                            </Row>
                        </Col>
                        <SignupInputCol  placeholder="First Name" name="firstName" size={4}/>
                        <SignupInputCol placeholder="Last Name" name="lastName" size={4} />
                        <SignupInputCol placeholder="Email" name="firstName" size={4}/>
                        <SignupInputCol placeholder="Password" name="password" size={4}/>
                        <SignupInputCol placeholder="Confirm Password" name="confirmPassword" size={4}/>
                        <SignupInputCol placeholder="Description" name="description" size={8}/>

                        <Col md={4} className="d-flex align-items-center justify-content-center w-100">
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Roles
                                </Dropdown.Toggle>
                                <Dropdown.Menu show >

                                    <Dropdown.Item>Users/Engineers</Dropdown.Item>
                                    <Dropdown.Item>Team Leader</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                    <div className="signup-page-container__signup-text w-100">
                        <p className="m-0 pl-0">Already registered? <Link to="/login">Login Here</Link></p>
                    </div>
                </div>










            </Container>
        </div>
    )
}

export default SignupPage
