import React from 'react'
import {Form, Row, Col, Dropdown, Image, Button, Container} from "react-bootstrap";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";
import Header from "../shared/Header";
import TempHeader from "../shared/TempHeader";
import Sidebar from "../sidebar/Sidebar";
import {Link} from "react-router-dom";

const CreateBugPage = () => {

    return (
        <div>


            <Header />

            <Row>
                <Col md={2}>
                    <Sidebar />
                </Col>
                <Col>
                    <Container>
                        <h2>Create Bug</h2>
                        <Row className="mb-3">
                            <Col>
                                <Row className="d-flex justify-content-between align-items-center px-5 h-100">
                                    <Image src="https://www.placehold.it/130x130"></Image>
                                    <Button className="primary">Upload</Button>
                                </Row>
                            </Col>

                            <Col md={4} className="d-flex align-items-center">
                                <Form.Control name="title" placeholder="Title" />
                            </Col>

                            <Col md={4} className="d-flex align-items-center justify-content-center">
                                <Dropdown>
                                    <Dropdown.Toggle>
                                        Types
                                    </Dropdown.Toggle>
                                    <DropdownMenu>
                                        <DropdownItem>User Interface</DropdownItem>
                                        <DropdownItem>Server</DropdownItem>
                                        <DropdownItem>Functionality Issue</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>

                            </Col>
                        </Row>


                        <Row className="mb-3">
                            <Col md={8}>
                                <Form.Control
                                    as="textarea"
                                    rows={5}
                                    name="description"
                                    placeholder="Write a short description of your bug here"
                                />
                            </Col>

                            <Col className="d-flex flex-column justify-content-around">
                                <Dropdown>
                                    <Dropdown.Toggle>
                                        Status
                                    </Dropdown.Toggle>
                                    <DropdownMenu>
                                        <DropdownItem>Not Started</DropdownItem>
                                        <DropdownItem>Ongoing</DropdownItem>
                                        <DropdownItem>Under Review</DropdownItem>
                                        <DropdownItem>Completed</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>

                                <Dropdown>
                                    <Dropdown.Toggle>
                                        Select Priority
                                    </Dropdown.Toggle>
                                    <DropdownMenu>
                                        <DropdownItem>Low</DropdownItem>
                                        <DropdownItem>Medium</DropdownItem>
                                        <DropdownItem>High</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </Col>
                        </Row>

                        <Button>Create</Button>
                        <Link to="/">Back</Link>
                    </Container>
                </Col>
            </Row>

        </div>
    )
}

export default CreateBugPage