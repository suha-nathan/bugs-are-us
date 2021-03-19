import React, {useEffect, useState} from 'react'
import {Col, Row} from "react-bootstrap";
import BugCard from "./BugCard";
import projectMockData from "../lib/projectMockData";

const BugList = (props) => {

    const [ projectData, setProjectData ] = useState({})

    useEffect(() => {
        getProjectData()
    },[])

    const getProjectData = () => {
        console.log(projectMockData[0])
        setProjectData(projectMockData[0])
    }

    return (
        <Row>
            <Col md={8}>
                { projectData?.bugs?.map( bug => (
                    <BugCard bug={bug} projectData={projectData}/>
                )) }
            </Col>

            <Col md={4}>
                A sidebar or something
            </Col>

        </Row>
    )
}

export default BugList