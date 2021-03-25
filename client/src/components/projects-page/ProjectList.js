import React from 'react'
import ProjectCard from "./ProjectCard"
import { Col, Row } from "react-bootstrap";
const ProjectList = ({ allProjects }) => {
    console.log(allProjects)
    return (
        <div>
            <Row>
                { allProjects.map( (project,idx)=> (
                    <Col key={idx} md={4}>
                        <ProjectCard project={project} />
                    </Col>
                ))}

            </Row>

        </div>
    )
}

export default ProjectList