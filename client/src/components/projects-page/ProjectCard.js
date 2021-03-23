import React from 'react'
import { Row, Col, Button, Card} from "react-bootstrap";

const ProjectCard = (props) => {

    return (

        <Card className="my-3 mr-3 text-left font-open-sans">
            <Card.Header className="text-left">
                Project Category
            </Card.Header>
            <Card.Body>
                <h3>Project Title</h3>
                <p>Project Description: Some quick example to build up the bulk of the card's content</p>

                <Row>
                    <Col className="d-flex flex-column justify-space-around">
                        <p className="font-open-sans__bolder mb-0">Team Lead</p>
                        <p>Name</p>
                        <p className="font-open-sans__bolder mb-0">Members</p>
                        <p>Isaac, Suha, Logan</p>
                    </Col>

                    <Col className="d-flex justify-content-center align-items-center">
                        <Button>View Bugs</Button>
                    </Col>
                </Row>

            </Card.Body>
        </Card>

    )
}

export default ProjectCard