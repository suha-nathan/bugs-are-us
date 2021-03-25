import React from 'react'
import { Row, Col, Button, Card} from "react-bootstrap";
import {useHistory} from "react-router-dom";

const ProjectCard = ({ project }) => {

    const history = useHistory()

    let { title, description, teamLead, members, categories, _id } = project

    return (

        <Card className="my-3 mr-3 text-left font-open-sans">
            <Card.Header className="text-left">
                {categories}
            </Card.Header>
            <Card.Body>
                <h3>{title}</h3>
                <p>{description}</p>

                <Row>
                    <Col className="d-flex flex-column justify-space-around">
                        <p className="font-open-sans__bolder mb-0">Team Lead</p>
                        <p>{teamLead?.firstName} {teamLead?.lastName}</p>
                        <p className="font-open-sans__bolder mb-0">Members</p>
                        <p>{members?.map( member => `${member.firstName} ${member.lastName}`).join(', ')}</p>
                    </Col>

                    <Col className="d-flex flex-column justify-content-around align-items-center">
                        <Button onClick={() => history.push(`/project/${_id}/view`)}>View Projects</Button>
                        <Button onClick={() => history.push(`/project/${_id}/bug`)}>View Bugs</Button>
                    </Col>
                </Row>

            </Card.Body>
        </Card>

    )
}

export default ProjectCard