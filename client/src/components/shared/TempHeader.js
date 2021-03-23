import React from 'react'
import { Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom'
import ProfilePic from "./ProfilePic";

const TempHeader = ({logOut}) => {
    function handleLogout(e){
        e.preventDefault()
        // console.log("logging out")
        logOut()
    }

    return (
        <Nav>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink>
            <NavLink to="/test">Test</NavLink>
            <NavLink onClick={(e)=>handleLogout(e)} to="/logout">Logout</NavLink>

        </Nav>

    )
}

export default TempHeader