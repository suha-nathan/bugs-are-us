import React, {useState} from 'react'
import TempHeader from "../shared/TempHeader";
import {Button, Col, Container, Dropdown, Image, Row} from "react-bootstrap";
import {Link, Redirect} from "react-router-dom";
import EditAccountInputCol from "./EditAccountInputCol";
import Header from "../shared/Header";
import Sidebar from "../sidebar/Sidebar";


const EditAccountPage = ({isAuth,signUp}) => {
    const [userInfo,setUserInfo] = useState({})

    // const signupFields = [{
    //     name: 'firstName',
    //     placeholder: 'First Name',
    //     errorMessage: 'Plea'
    // }'lastName', 'email', 'password', 'confirmPassword']

    if(isAuth){
        // console.log("Redirecting")
        return <Redirect to={"/"}/>
    }

    return (
        <div>
            <Header />

            <Row>
                <Col md={2}>
                    <Sidebar />
                </Col>

                <Col>

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
                                <EditAccountInputCol placeholder="First Name" name="firstName" setUserInfo={setUserInfo} size={4}/>
                                <EditAccountInputCol placeholder="Last Name" name="lastName" setUserInfo={setUserInfo} size={4} />
                                <EditAccountInputCol placeholder="Email" name="email" setUserInfo={setUserInfo} size={4}/>
                                <EditAccountInputCol placeholder="Password" name="password" type="password" setUserInfo={setUserInfo} size={4}/>
                                <EditAccountInputCol placeholder="Confirm Password" name="confirmPassword" type="password" setUserInfo={setUserInfo} size={4}/>
                                <EditAccountInputCol placeholder="Description" name="description" setUserInfo={setUserInfo} isTextarea={true} size={8}/>

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
                                        <Button variant="primary" onClick={()=>signUp(userInfo)}>Save Changes</Button>
                                    </Col>


                                </Row>

                            </div>
                        </div>

                    </Container>
                </Col>
            </Row>



        </div>
    )
}

export default EditAccountPage
