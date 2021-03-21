import React from 'react'
import {Badge} from "react-bootstrap";
import {capitalizeWords} from "../lib/library";

const DataRow = ({bug, index}) => {

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{bug.title}</td>
            <td>{bug.user.firstName} {bug.user.lastName}</td>
            <td>{bug.createdAt}</td>
            <td>
                <Badge variant="pill badge-warning">
                    {capitalizeWords(bug.status)}
                </Badge>
            </td>
            <td>--</td>
            <td>{bug.priority}</td>
            <td>{bug.upVotes.length}</td>
        </tr>
    )
}

export default DataRow