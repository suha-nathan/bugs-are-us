import React from 'react'
import {Col, Nav, Row} from "react-bootstrap";
import { NavLink, Link } from 'react-router-dom'
import ProfilePic from "./ProfilePic";
const Header = (props) => {

    return (
        <Row>
            <Col md={1}><h5>BUGS R US</h5></Col>
            <Col md={8}>
                <Nav>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                </Nav>
            </Col>
            <Col md={3} className="d-flex">

                <p>Name</p>
                <ProfilePic size={3}/>
            </Col>
        </Row>
    )
}

export default Header