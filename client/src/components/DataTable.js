import React, {useEffect, useState} from 'react'
import {Button, Table, Badge, Container} from "react-bootstrap";
import projectMockData from "../lib/projectMockData";
import { capitalizeWords } from "../lib/library";
import DataRow from "./DataRow";

const DataTable = (props) => {

    const [ projectData, setProjectData ] = useState({})

    useEffect(() => {
        getProjectData()
        console.log(projectData)
    },[])

    const getProjectData = () => {
        // console.log(projectMockData[0])
        setProjectData(projectMockData[0])
    }

    return (

            <Table striped hover bordered>
                <thead>
                    <tr>
                        <th>Bug ID</th>
                        <th>Bug Title</th>
                        <th>Reported by</th>
                        <th>Created At</th>
                        <th>Status</th>
                        <th>Assignee</th>
                        <th>Severity</th>
                        <th>Upvotes</th>
                    </tr>
                </thead>
                <tbody>
                    { projectData?.bugs?.map( (bug, index) => (
                        <DataRow bug={bug} index={index} key={index} />
                    ))}
                </tbody>
            </Table>



    )
}

export default DataTable