import React, {useEffect, useImperativeHandle, useRef, useState} from 'react'
import {Card, Row, Col, Button, Dropdown, DropdownButton, SplitButton, InputGroup} from 'react-bootstrap'

import CommentInputRow from "./CommentInputRow";
import {Link} from "react-router-dom";
import ProfilePic from "./ProfilePic";
import projectMockData from '../lib/projectMockData'

const BugCard = ({ bug, projectData }) => {
    // console.log(bug)

    return (
        <Col className="text-left my-3">
            <Card>

                <Card.Body>
                    <Card.Title>{bug.title}</Card.Title>
                    <p>{bug.description}</p>
                    <DropdownButton

                        key="right"
                        drop="right"
                        variant="secondary"
                        title="Assign members"
                        id="assign-members-dropdown-button"
                    >

                        {
                            projectData?.members?.map(member => (
                                <Dropdown.Item>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Checkbox />
                                        </InputGroup.Prepend>
                                        <InputGroup.Text>
                                            {member.firstName} {member.lastName}
                                        </InputGroup.Text>
                                    </InputGroup>

                                  </Dropdown.Item>
                            ))
                        }


                    </DropdownButton>
                    <DropdownButton
                        title="Status"
                    >
                        <Dropdown.Item>Inactive</Dropdown.Item>
                        <Dropdown.Item>Ongoing</Dropdown.Item>
                        <Dropdown.Item>Resolved</Dropdown.Item>
                    </DropdownButton>
                    <ProfilePic size={5}/>
                    <Button variant="link" className="pl-0">Show Comments</Button>
                    <CommentInputRow />
                </Card.Body>
            </Card>
        </Col>

    )
}

export default BugCard