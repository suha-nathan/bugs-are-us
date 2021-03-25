import React, {useEffect, useState} from 'react'
import {Pagination, Table} from "react-bootstrap";
import projectMockData from "../../lib/projectMockData";
import DataRow from "./DataRow";
import axios from "axios";

const DataTable = ({ projectData }) => {

    function handleUpVote(){
        console.log(projectData)

    }



    return (
        <>
            <Table className="font-open-sans" striped hover bordered>
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
                    <DataRow bug={bug} index={index} key={index} handleUpVote={handleUpVote}/>
                ))}
                </tbody>
            </Table>

            <Pagination className="font-open-sans">
                <Pagination.First />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Last />
            </Pagination>
        </>




    )
}

export default DataTable