import React from 'react'
import {Badge, Col, Dropdown, Row, Table} from "react-bootstrap";
import ProfilePic from "../shared/ProfilePic";

const BugInfo = ({ bugDetails }) => {

    console.log(bugDetails)

    let { type, title, description, priority, upVotes, user } = bugDetails
    return (
        <Row className="my-3 font-open-sans">
            <Col>
                <Table variant="sm" className="text-left border-bottom" >
                    <tbody>
                    <tr>
                        <td>Priority</td>
                        <td>{priority}</td>
                    </tr>
                    <tr>
                        <td>Type/Category</td>
                        <td>{type}</td>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td style={{height: '8.5rem'}}>{description}</td>
                    </tr>
                    </tbody>
                </Table>
            </Col>

            <Col>
                <Table variant="sm" className="text-left border-bottom">
                    <tbody>
                    <tr>
                        <td>Assignee</td>
                        <td className="d-flex align-items-center">
                            <ProfilePic size={1.5} />
                            <span className="mx-2">Larry</span>
                        </td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td className="d-flex align-items-center">
                            <Badge variant="pill badge-primary mr-2">Open</Badge>
                            <Dropdown>
                                <Dropdown.Toggle size="sm">
                                    v
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Closed</Dropdown.Item>
                                    <Dropdown.Item>Closed</Dropdown.Item>
                                    <Dropdown.Item>Closed</Dropdown.Item>
                                </Dropdown.Menu>

                            </Dropdown>
                        </td>
                    </tr>
                    <tr>
                        <td>Assigned Members</td>
                        <td>
                            <div className="d-flex align-items-center mb-1">
                                <ProfilePic size={1.5} />
                                <span className="mx-2">Larry</span>
                            </div>

                            <div className="d-flex align-items-center mb-1">
                                <ProfilePic size={1.5} />
                                <span className="mx-2">Joe</span>
                            </div>

                            <div className="d-flex align-items-center mb-1">
                                <ProfilePic size={1.5} />
                                <span className="mx-2">Chandler</span>
                            </div>
                        </td>


                    </tr>

                    <tr>
                        <td>Upvotes</td>
                        <td>{upVotes?.length}</td>
                    </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>
    )
}

export default BugInfo