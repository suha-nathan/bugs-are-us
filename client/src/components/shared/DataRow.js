import React from 'react'
import {Badge} from "react-bootstrap";
import {capitalizeWords} from "../../lib/library";
import {Link} from "react-router-dom";

const DataRow = ({bug, index}) => {

    return (
        <tr>
            <td>{index + 1}</td>
            <td><Link to={`/bug/${bug.id}`}>{bug.title}</Link></td>
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