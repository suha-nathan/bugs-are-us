import React, {useState} from 'react'
import TempHeader from "./TempHeader";
import {Button, Col, Container, Dropdown, Image, Row} from "react-bootstrap";
import {Link, Redirect} from "react-router-dom";
import SignupInputCol from "./SignupInputCol";


const SignupPage = ({isAuth,signUp}) => {
    const [userInfo,setUserInfo] = useState({})

    // const signupFields = [{
    //     name: 'firstName',
    //     placeholder: 'First Name',
    //     errorMessage: 'Plea'
    // }'lastName', 'email', 'password', 'confirmPassword']

    if(isAuth===true){
        // console.log("Redirecting")
        return <Redirect to={"/"}/>
    }

    return (
        <div className="signup-page-container">
            <TempHeader />

            <Container className="d-flex flex-column justify-content-center align-items-center vh-100 ">
                <h1 className="my-0 ">Bugs R Us</h1>

                <div className="signup-page-container__content w-100 h-75 d-flex flex-column justify-content-between">
                    <Row className="h-75 ">

                        <Col className="signup-input-col">
                            <Row className="d-flex justify-content-between align-items-center px-5 h-100">
                                <Image src="https://www.placehold.it/130x130" className="rounded-circle"></Image>
                                <Button className="primary">Upload</Button>
                            </Row>
                        </Col>
                        <SignupInputCol placeholder="First Name" name="firstName" setUserInfo={setUserInfo} size={4}/>
                        <SignupInputCol placeholder="Last Name" name="lastName" setUserInfo={setUserInfo} size={4} />
                        <SignupInputCol placeholder="Email" name="email" setUserInfo={setUserInfo} size={4}/>
                        <SignupInputCol placeholder="Password" name="password" type="password" setUserInfo={setUserInfo} size={4}/>
                        <SignupInputCol placeholder="Confirm Password" name="confirmPassword" type="password" setUserInfo={setUserInfo} size={4}/>
                        <SignupInputCol placeholder="Description" name="description" setUserInfo={setUserInfo} isTextarea={true} size={8}/>

                        <Col md={4} className="signup-input-col d-flex align-items-center justify-content-center w-100">
                            <Dropdown>
                                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                    Roles
                                </Dropdown.Toggle>
                                <Dropdown.Menu show >

                                    <Dropdown.Item>Users/Engineers</Dropdown.Item>
                                    <Dropdown.Item>Team Leader</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                        </Col>
                    </Row>
                    <div className="signup-page-container__signup-row w-100">
                        <Row>
                            <Col md={{ span: 4, offset: 4 }}>
                                <Button variant="primary" onClick={()=>signUp(userInfo)}>Sign Up</Button>
                            </Col>

                            <Col md={4}>
                                <p className="m-0 pl-0">Already registered? <Link to="/login">Login Here</Link></p>
                            </Col>
                        </Row>

                    </div>
                </div>

            </Container>
        </div>
    )
}

export default SignupPage
