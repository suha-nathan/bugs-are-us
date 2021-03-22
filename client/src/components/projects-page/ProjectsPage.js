import React from 'react'
import Header from "../shared/Header";
import Sidebar from "../sidebar/Sidebar";
import ProjectList from "./ProjectList";
import {Row, Col, Container, Button} from "react-bootstrap";
import {useHistory} from "react-router-dom";

const ProjectsPage = ({ user, logOut }) => {

    const history = useHistory()

    return (
        <div>
            <Header user={user} logOut={logOut}/>

            <Row>
                <Col md={2}>
                    <Sidebar />
                </Col>


            <Col>
                <Container>
                    <h2 className="text-left">All Projects</h2>
                    <Button onClick={() => history.push('/')}>+ Create New</Button>
                    <ProjectList />
                </Container>
            </Col>
            </Row>



        </div>
    )
}

export default ProjectsPage