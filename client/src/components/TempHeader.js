import React from 'react'
import {Col, Nav, Row} from "react-bootstrap";
import { NavLink, Link } from 'react-router-dom'
import ProfilePic from "./ProfilePic";
const TempHeader = (props) => {

    return (


        <Nav>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink>
        </Nav>

    )
}

export default TempHeader