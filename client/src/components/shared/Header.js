import React from 'react'
import {Col, Nav, Row} from "react-bootstrap";
import { NavLink } from 'react-router-dom'
import ProfilePic from "./ProfilePic";
const Header = ({ user }) => {

    console.log(user)
    return (
        <Row className="bg-primary py-2 px-3">
            <Col md={2} className="d-flex align-items-center pl-4">
                <h5 className="m-0">BUGS R US</h5>
            </Col>
            <Col md={8} className="d-flex align-items-center">
                <Nav>
                    <NavLink className="text-light mx-3" to="/">Home</NavLink>
                    <NavLink className="text-light mx-3"  to="/bugfeed">Bug Feed</NavLink>
                    <NavLink className="text-light mx-3" to="/projects">Projects</NavLink>
                    <NavLink className="text-light mx-3" to="/reports">Reports</NavLink>
                </Nav>
            </Col>
            <Col md={2} className="d-flex justify-content-end align-items-center pr-4">

                <p className="my-0 mx-3">{user?.firstName} {user?.lastName}</p>
                <ProfilePic size={2.5} isShowName={false}/>
            </Col>
        </Row>
    )
}

export default Header