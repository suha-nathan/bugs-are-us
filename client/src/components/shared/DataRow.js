import React from 'react'
import { Button, Badge } from "react-bootstrap";
import { capitalizeWords } from "../../lib/library";
import { Link } from "react-router-dom";
import moment from 'moment'

const DataRow = ({bug, index, handleUpVote}) => {

    return (
        <tr>
            <td>{index + 1}</td>
            <td><Link to={`/bug/${bug._id}`}>{bug.title}</Link></td>
            {/*<td>{bug.user}</td>*/}
            <td>{bug.user?.firstName} {bug.user?.lastName}</td>
            <td>{moment(bug.createdAt).format('YYYY-MM-DD hh:mm:ss a ')}</td>
            <td>
                <Badge variant="pill badge-warning">
                    {capitalizeWords(bug.status)}
                </Badge>
            </td>
            <td>--</td>
            <td>{bug.priority}</td>
            <td>
                {bug.upVotes.length}
                <Button variant="link" onClick={handleUpVote}>
                    <i className="bi bi-arrow-up-short text-success"></i>
                </Button>
            </td>
        </tr>
    )
}

export default DataRow