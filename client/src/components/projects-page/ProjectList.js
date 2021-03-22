import React from 'react'
import ProjectCard from "./ProjectCard"
import { Col, Row } from "react-bootstrap";
const ProjectList = (props) => {

    return (
        <div>
            <Row>
                { Array(5).fill(0).map(project => (
                    <Col md={4}>
                        <ProjectCard project={project} />
                    </Col>
                ))}

            </Row>

        </div>
    )
}

export default ProjectList