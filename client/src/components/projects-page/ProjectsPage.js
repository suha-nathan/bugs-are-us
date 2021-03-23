import React from 'react'
import Header from "../shared/Header";
import Sidebar from "../sidebar/Sidebar";
import ProjectList from "./ProjectList";
import {Row, Col, Container, Button} from "react-bootstrap";
import {Link, useHistory} from "react-router-dom";

const ProjectsPage = () => {

    const history = useHistory()

    return (

        <Container className="text-left">
            <Link to="/"> Back</Link>
            <h2>All Projects</h2>
            <Button onClick={() => history.push('/')}>+ Create New</Button>
            <ProjectList />
        </Container>

    )
}

export default ProjectsPage