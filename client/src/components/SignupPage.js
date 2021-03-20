import React from 'react'
import TempHeader from "./TempHeader";
import {Button, CardImg, Col, Container, Form, Image, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import SignupInputCol from "./SignupInputCol";

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
                <Row className="w-100 h-75 signup-page-container__content">

                    <Col>
                        <Row className="d-flex justify-content-around align-items-center px-5">

                                <Image src="https://www.placehold.it/100x100" className="rounded-circle"></Image>

                                <Button className="bg-success">Upload</Button>

                        </Row>
                    </Col>
                    <SignupInputCol placeholder="First Name" name="firstName" />
                    <SignupInputCol placeholder="Last Name" name="lastName" />
                    <SignupInputCol placeholder="Email" name="firstName" />
                    <SignupInputCol placeholder="Password" name="password" />
                    <SignupInputCol placeholder="Confirm Password" name="confirmPassword" />
                    <SignupInputCol placeholder="Description" name="description" />
                    <SignupInputCol placeholder="Description" name="description" />
                    {/*<Col md={7} className="login-page-container__gif-section"></Col>*/}
                    {/*<Col md={5} className="login-page-container__login-section d-flex justify-content-center flex-column align-items-center">*/}
                    {/*    <h2>Sign Up</h2>*/}
                    {/*    <Form.Control name="email" placeholder="Email" className="my-2" />*/}
                    {/*    <Form.Control name="password" placeholder="Password" className="my-2" />*/}
                    {/*    <Button variant="success" className="my-2">Sign Up</Button>*/}
                    {/*    <p className="login-page-container__login-section__signup-text">Don't have an account? <Link to="/signup">Sign Up Here</Link></p>*/}
                    {/*</Col>*/}
                </Row>
            </Container>
        </div>
    )
}

export default SignupPage
