import React, {useEffect, useState} from 'react'
import {Col, Row} from "react-bootstrap";
import BugCard from "./BugCard";
import projectMockData from "../../lib/projectMockData";

const BugList = (props) => {

    const [ projectData, setProjectData ] = useState({})

    useEffect(() => {
        getProjectData()
    },[])

    const getProjectData = () => {
        // console.log(projectMockData[0])
        setProjectData(projectMockData[0])
    }

    return (
        <Col md={8}>
            { projectData?.bugs?.map( bug => (
                <BugCard bug={bug} projectData={projectData}/>
            )) }
        </Col>
    )
}

export default BugList