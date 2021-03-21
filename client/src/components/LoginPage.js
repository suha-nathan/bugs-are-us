import React, {useState} from 'react'
import {Row, Col, Container, Form, Button} from 'react-bootstrap'
import {Link, Redirect} from "react-router-dom";
import TempHeader from "./TempHeader";

const LoginPage = ({isAuth, login}) => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    if(isAuth){
        // console.log("Redirecting")
        return <Redirect to={"/"}/>
    }

    // console.log(email)
    // console.log(password)
    return (
        <div className="login-page-container">
            <TempHeader />

            <Container className="d-flex flex-column justify-content-center align-items-center vh-100 ">
                <h1 className="my-0 ">Bugs R Us</h1>
                <Row className="w-100 h-75 login-page-container__content">
                    <Col md={7} className="login-page-container__gif-section"></Col>
                    <Col md={5} className="login-page-container__login-section d-flex justify-content-center flex-column align-items-center">

                        <h2>Log In</h2>
                        <Form.Control
                            name="email"
                            placeholder="Email"
                            className="my-2"
                            onChange={(e)=> setEmail(e.target.value)}
                        />

                        <Form.Control
                            name="password"
                            placeholder="Password"
                            type="password"
                            className="my-2"
                            onChange={(e)=>setPassword(e.target.value)}
                        />

                        <Button
                            variant="primary"
                            className="my-2"
                            onClick={()=>login(email,password)}>Log In</Button>


                        <p className="login-page-container__login-section__signup-text">Don't have an account? <Link to="/signup">Sign Up Here</Link></p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LoginPage