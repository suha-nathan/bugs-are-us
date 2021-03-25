import React, { useState, useEffect } from 'react'
import ProjectList from "./ProjectList";
import {Row, Col, Container, Button} from "react-bootstrap";
import {Link, useHistory} from "react-router-dom";
import axios from 'axios'

const ProjectsPage = ({ allProjects }) => {

    const history = useHistory()


    useEffect(() => {

    }, [])



    console.log(allProjects)
    return (

        <Container className="text-left">
            <Link to="/"> Back</Link>
            <h2>All Projects</h2>
            <Button onClick={() => history.push('/project/create')}>+ Create New</Button>
            <ProjectList allProjects={allProjects}/>
        </Container>

    )
}

export default ProjectsPage