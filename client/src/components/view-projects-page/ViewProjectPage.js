import React from 'react'
import { useParams } from 'react-router-dom'

const ViewProjectPage = (props) => {

    let { id } = useParams()

    function getProject() {

    }
    return (
        <div>
            {id}
        </div>
    )
}

export default ViewProjectPage