import React from 'react'
import {Col, Nav, Row} from "react-bootstrap";
import { NavLink, Link } from 'react-router-dom'
import ProfilePic from "./ProfilePic";
const TempHeader = ({logOut}) => {
    function logoutFunc(e){
        e.preventDefault()
        console.log("logging out")
        logOut()
    }

    return (
        <Nav>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink>
            <NavLink onClick={(e)=>logoutFunc(e)} to="/logout">Logout</NavLink>

        </Nav>

    )
}

export default TempHeader