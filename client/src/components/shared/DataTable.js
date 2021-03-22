import React, {useEffect, useState} from 'react'
import { Table } from "react-bootstrap";
import projectMockData from "../../lib/projectMockData";
import DataRow from "./DataRow";
import axios from "axios";

const DataTable = ({ projectData }) => {




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
                    { projectData?.data?.map( (bug, index) => (
                        <DataRow bug={bug} index={index} key={index} />
                    ))}
                </tbody>
            </Table>



    )
}

export default DataTable